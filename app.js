'use strict';

(() => {
  const STORAGE_KEY = 'reusa.equipment.v1';
  const MAX_EQUIPMENT = 500;
  const STATUS = {
    'in-use': { label: 'En uso', className: 'status-in-use' },
    repair: { label: 'Requiere reparación', className: 'status-repair' },
    donate: { label: 'Listo para donar', className: 'status-donate' },
    recycled: { label: 'Reciclado', className: 'status-recycled' }
  };
  const TYPE_ICONS = {
    Computadora: '▣', Celular: '▯', Tablet: '▱', Monitor: '▤',
    Impresora: '▧', Periférico: '⌁', Otro: '◇'
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const equipmentList = $('#equipmentList');
  const equipmentDialog = $('#equipmentDialog');
  const maintenanceDialog = $('#maintenanceDialog');
  const detailDialog = $('#detailDialog');
  const equipmentForm = $('#equipmentForm');
  const maintenanceForm = $('#maintenanceForm');
  const toast = $('#toast');
  let records = loadRecords();
  let toastTimer = null;

  function loadRecords() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.map(normalizeRecord).filter(Boolean).slice(0, MAX_EQUIPMENT);
    } catch (error) {
      console.warn('No se pudieron leer los registros locales.', error);
      return [];
    }
  }

  function normalizeRecord(item) {
    if (!item || typeof item !== 'object') return null;
    const name = cleanText(item.name, 70);
    const type = cleanText(item.type, 30);
    const status = STATUS[item.status] ? item.status : 'in-use';
    if (!name || !type) return null;
    const maintenance = Array.isArray(item.maintenance)
      ? item.maintenance.slice(0, 100).map(entry => ({
          id: cleanText(entry?.id, 80) || makeId(),
          date: validDate(entry?.date) ? entry.date : '',
          type: cleanText(entry?.type, 50),
          description: cleanText(entry?.description, 300)
        })).filter(entry => entry.type && entry.description)
      : [];
    return {
      id: cleanText(item.id, 80) || makeId(),
      name,
      type,
      brand: cleanText(item.brand, 70),
      acquired: validDate(item.acquired) ? item.acquired : '',
      status,
      notes: cleanText(item.notes, 500),
      createdAt: typeof item.createdAt === 'string' ? item.createdAt : new Date().toISOString(),
      updatedAt: typeof item.updatedAt === 'string' ? item.updatedAt : new Date().toISOString(),
      maintenance
    };
  }

  function cleanText(value, maxLength) {
    return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
  }

  function validDate(value) {
    return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00`));
  }

  function makeId() {
    return (globalThis.crypto && typeof crypto.randomUUID === 'function')
      ? crypto.randomUUID()
      : `r-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      return true;
    } catch (error) {
      console.error('No se pudieron guardar los datos.', error);
      showToast('No se pudo guardar. Exporta tus datos y libera espacio del navegador.');
      return false;
    }
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3200);
  }

  function formatDate(value) {
    if (!validDate(value)) return 'Sin fecha';
    return new Intl.DateTimeFormat('es-MX', { day: '2-digit', month: 'short', year: 'numeric' })
      .format(new Date(`${value}T12:00:00`));
  }

  function render() {
    renderStats();
    const search = $('#searchInput').value.trim().toLocaleLowerCase('es-MX');
    const filter = $('#statusFilter').value;
    const visible = records.filter(record => {
      const searchable = `${record.name} ${record.type} ${record.brand} ${record.notes}`.toLocaleLowerCase('es-MX');
      return (filter === 'all' || record.status === filter) && (!search || searchable.includes(search));
    }).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

    equipmentList.replaceChildren();
    visible.forEach(record => equipmentList.append(createCard(record)));
    const emptyState = $('#emptyState');
    emptyState.hidden = records.length > 0;
    equipmentList.hidden = records.length === 0 || visible.length === 0;
    if (records.length > 0 && visible.length === 0) {
      equipmentList.hidden = false;
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      const heading = document.createElement('h3');
      heading.textContent = 'No se encontraron equipos';
      const message = document.createElement('p');
      message.textContent = 'Prueba con otro término o cambia el filtro de estado.';
      empty.append(heading, message);
      equipmentList.append(empty);
    }
    $('#listStatus').textContent = `${visible.length} equipo(s) mostrado(s).`;
  }

  function renderStats() {
    $('#totalCount').textContent = String(records.length);
    $('#inUseCount').textContent = String(records.filter(item => item.status === 'in-use').length);
    $('#repairDonateCount').textContent = String(records.filter(item => ['repair', 'donate'].includes(item.status)).length);
    $('#recycledCount').textContent = String(records.filter(item => item.status === 'recycled').length);
  }

  function createCard(record) {
    const article = document.createElement('article');
    article.className = 'equipment-card';
    const top = document.createElement('div');
    top.className = 'card-top';
    const icon = document.createElement('span');
    icon.className = 'equipment-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = TYPE_ICONS[record.type] || '◇';
    const badge = document.createElement('span');
    badge.className = `status-pill ${STATUS[record.status].className}`;
    badge.textContent = STATUS[record.status].label;
    top.append(icon, badge);

    const title = document.createElement('h3');
    title.textContent = record.name;
    const meta = document.createElement('p');
    meta.className = 'card-meta';
    meta.textContent = [record.type, record.brand].filter(Boolean).join(' · ') || record.type;
    const notes = document.createElement('p');
    notes.className = 'card-notes';
    notes.textContent = record.notes || `Adquisición: ${formatDate(record.acquired)}. Sin notas adicionales.`;
    const divider = document.createElement('hr');
    divider.className = 'card-divider';
    const actions = document.createElement('div');
    actions.className = 'card-actions';
    actions.append(
      actionButton('Ver detalle', 'detail', record.id),
      actionButton('Mantenimiento', 'maintenance', record.id),
      actionButton('Editar', 'edit', record.id),
      actionButton('Eliminar', 'delete', record.id)
    );
    article.append(top, title, meta, notes, divider, actions);
    return article;
  }

  function actionButton(label, action, id) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.dataset.action = action;
    button.dataset.id = id;
    if (action === 'delete') button.classList.add('danger-action');
    return button;
  }

  function openEquipmentForm(record = null) {
    equipmentForm.reset();
    $('#equipmentId').value = record?.id || '';
    $('#dialogTitle').textContent = record ? 'Editar equipo' : 'Registrar equipo';
    $('#saveEquipmentButton').textContent = record ? 'Guardar cambios' : 'Guardar equipo';
    $('#equipmentName').value = record?.name || '';
    $('#equipmentType').value = record?.type || '';
    $('#equipmentBrand').value = record?.brand || '';
    $('#equipmentDate').value = record?.acquired || '';
    $('#equipmentStatus').value = record?.status || 'in-use';
    $('#equipmentNotes').value = record?.notes || '';
    $('#nameError').textContent = '';
    equipmentDialog.showModal();
    $('#equipmentName').focus();
  }

  function submitEquipment(event) {
    event.preventDefault();
    const name = $('#equipmentName').value.trim();
    const type = $('#equipmentType').value;
    const acquired = $('#equipmentDate').value;
    $('#nameError').textContent = '';
    if (!name) {
      $('#nameError').textContent = 'Escribe el nombre del equipo.';
      $('#equipmentName').focus();
      return;
    }
    if (!type) {
      $('#equipmentType').focus();
      showToast('Selecciona el tipo de equipo.');
      return;
    }
    if (acquired && (!validDate(acquired) || acquired > new Date().toISOString().slice(0, 10))) {
      $('#equipmentDate').focus();
      showToast('Revisa la fecha de adquisición.');
      return;
    }
    const id = $('#equipmentId').value;
    const now = new Date().toISOString();
    const current = records.find(item => item.id === id);
    const item = normalizeRecord({
      id: id || makeId(),
      name,
      type,
      brand: $('#equipmentBrand').value,
      acquired,
      status: $('#equipmentStatus').value,
      notes: $('#equipmentNotes').value,
      createdAt: current?.createdAt || now,
      updatedAt: now,
      maintenance: current?.maintenance || []
    });
    if (!item) return;
    if (current) records = records.map(existing => existing.id === id ? item : existing);
    else {
      if (records.length >= MAX_EQUIPMENT) {
        showToast(`El límite del prototipo es de ${MAX_EQUIPMENT} equipos.`);
        return;
      }
      records.push(item);
    }
    if (persist()) {
      equipmentDialog.close();
      render();
      showToast(current ? 'Equipo actualizado.' : 'Equipo registrado.');
    }
  }

  function openMaintenanceForm(id) {
    const record = records.find(item => item.id === id);
    if (!record) return;
    maintenanceForm.reset();
    $('#maintenanceEquipmentId').value = id;
    $('#maintenanceEquipmentName').textContent = record.name;
    $('#maintenanceDate').value = new Date().toISOString().slice(0, 10);
    maintenanceDialog.showModal();
    $('#maintenanceDate').focus();
  }

  function submitMaintenance(event) {
    event.preventDefault();
    const id = $('#maintenanceEquipmentId').value;
    const record = records.find(item => item.id === id);
    const date = $('#maintenanceDate').value;
    const type = $('#maintenanceType').value;
    const description = $('#maintenanceDescription').value.trim();
    if (!record || !validDate(date) || date > new Date().toISOString().slice(0, 10) || !type || !description) {
      showToast('Revisa la fecha y completa los campos obligatorios.');
      return;
    }
    record.maintenance.unshift({ id: makeId(), date, type, description: description.slice(0, 300) });
    record.maintenance = record.maintenance.slice(0, 100);
    record.updatedAt = new Date().toISOString();
    if (record.status === 'repair' && type === 'Reparación') record.status = 'in-use';
    if (persist()) {
      maintenanceDialog.close();
      render();
      showToast('Mantenimiento agregado al historial.');
    }
  }

  function openDetails(id) {
    const record = records.find(item => item.id === id);
    if (!record) return;
    $('#detailTitle').textContent = record.name;
    const content = $('#detailContent');
    content.replaceChildren();
    const grid = document.createElement('div');
    grid.className = 'detail-grid';
    const values = [
      ['Tipo', record.type], ['Marca o modelo', record.brand || 'No especificado'],
      ['Adquisición', formatDate(record.acquired)], ['Estado', STATUS[record.status].label]
    ];
    values.forEach(([label, value]) => {
      const item = document.createElement('div');
      item.className = 'detail-item';
      const term = document.createElement('span'); term.textContent = label;
      const detail = document.createElement('strong'); detail.textContent = value;
      item.append(term, detail); grid.append(item);
    });
    content.append(grid);
    if (record.notes) {
      const notes = document.createElement('p');
      notes.className = 'detail-notes';
      notes.textContent = record.notes;
      content.append(notes);
    }
    const heading = document.createElement('h3');
    heading.className = 'history-title';
    heading.textContent = `Historial de mantenimiento (${record.maintenance.length})`;
    content.append(heading);
    if (record.maintenance.length) {
      const list = document.createElement('ol');
      list.className = 'history-list';
      record.maintenance.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${formatDate(entry.date)} · ${entry.type}: ${entry.description}`;
        list.append(li);
      });
      content.append(list);
    } else {
      const none = document.createElement('p');
      none.className = 'section-subtitle';
      none.textContent = 'Todavía no hay actividades registradas.';
      content.append(none);
    }
    detailDialog.showModal();
  }

  function exportJson() {
    const payload = {
      application: 'Reúsa',
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      records
    };
    downloadFile(`reusa-respaldo-${dateForFile()}.json`, JSON.stringify(payload, null, 2), 'application/json;charset=utf-8');
    showToast('Respaldo JSON descargado.');
  }

  function exportCsv() {
    const columns = ['Nombre', 'Tipo', 'Marca o modelo', 'Fecha de adquisición', 'Estado', 'Notas', 'Cantidad de mantenimientos'];
    const rows = records.map(record => [record.name, record.type, record.brand, record.acquired, STATUS[record.status].label, record.notes, record.maintenance.length]);
    const csv = [columns, ...rows].map(row => row.map(csvCell).join(',')).join('\r\n');
    downloadFile(`reusa-inventario-${dateForFile()}.csv`, '\uFEFF' + csv, 'text/csv;charset=utf-8');
    showToast('Inventario CSV descargado.');
  }

  function csvCell(value) {
    let text = String(value ?? '');
    if (/^[\s]*[=+@\-]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function dateForFile() { return new Date().toISOString().slice(0, 10); }

  async function importJson(file) {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      showToast('El archivo supera el límite de 2 MB.');
      return;
    }
    try {
      const parsed = JSON.parse(await file.text());
      const incoming = Array.isArray(parsed) ? parsed : parsed?.records;
      if (!Array.isArray(incoming)) throw new Error('Formato incorrecto');
      const normalized = incoming.map(normalizeRecord).filter(Boolean);
      if (!normalized.length && incoming.length) throw new Error('No hay registros válidos');
      const byId = new Map(records.map(item => [item.id, item]));
      normalized.forEach(item => byId.set(item.id, item));
      const merged = [...byId.values()];
      if (merged.length > MAX_EQUIPMENT) throw new Error(`El máximo permitido es ${MAX_EQUIPMENT} equipos`);
      const previous = records;
      records = merged;
      if (!persist()) { records = previous; throw new Error('No se pudo guardar la importación'); }
      render();
      showToast(`Importación completada: ${normalized.length} registro(s) procesado(s).`);
    } catch (error) {
      console.warn('Importación no válida.', error);
      showToast('No se pudo importar. Revisa que sea un respaldo JSON de Reúsa.');
    } finally {
      $('#importFile').value = '';
    }
  }

  function handleCardAction(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const { action, id } = button.dataset;
    if (action === 'detail') openDetails(id);
    if (action === 'maintenance') openMaintenanceForm(id);
    if (action === 'edit') openEquipmentForm(records.find(item => item.id === id));
    if (action === 'delete') {
      const record = records.find(item => item.id === id);
      if (record && window.confirm(`¿Eliminar el registro de \"${record.name}\"? Esta acción no se puede deshacer. Exporta un respaldo antes de continuar.`)) {
        const previous = records;
        records = records.filter(item => item.id !== id);
        if (persist()) { render(); showToast('Registro eliminado.'); }
        else records = previous;
      }
    }
  }

  function bindEvents() {
    ['#addTopButton', '#heroAddButton', '#addButton', '#emptyAddButton'].forEach(selector => {
      $(selector).addEventListener('click', () => openEquipmentForm());
    });
    equipmentForm.addEventListener('submit', submitEquipment);
    maintenanceForm.addEventListener('submit', submitMaintenance);
    equipmentList.addEventListener('click', handleCardAction);
    $('#searchInput').addEventListener('input', render);
    $('#statusFilter').addEventListener('change', render);
    $('#exportButton').addEventListener('click', () => {
      if (!records.length) { showToast('No hay registros para exportar.'); return; }
      exportJson();
    });
    $('#exportCsvButton').addEventListener('click', () => {
      if (!records.length) { showToast('No hay registros para exportar.'); return; }
      exportCsv();
    });
    $('#importButton').addEventListener('click', () => $('#importFile').click());
    $('#importFile').addEventListener('change', event => importJson(event.target.files?.[0]));
    document.addEventListener('click', event => {
      const closeButton = event.target.closest('[data-close]');
      if (closeButton) document.getElementById(closeButton.dataset.close)?.close();
    });
    [equipmentDialog, maintenanceDialog, detailDialog].forEach(dialog => {
      dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
      });
    });
  }

  bindEvents();
  render();
})();
