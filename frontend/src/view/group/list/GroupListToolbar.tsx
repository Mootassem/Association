import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import groupSelectors from 'src/modules/group/groupSelectors';
import destroyActions from 'src/modules/group/destroy/groupDestroyActions';
import destroySelectors from 'src/modules/group/destroy/groupDestroySelectors';
import actions from 'src/modules/group/list/groupListActions';
import selectors from 'src/modules/group/list/groupListSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ReactTooltip from 'react-tooltip';

function GroupToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    groupSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    groupSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    groupSelectors.selectPermissionToImport,
  );

  const doOpenDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(true);
  };

  const doCloseDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(false);
  };

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    doCloseDestroyAllConfirmModal();

    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;

    const button = (
      <span
        data-tip={i18n('common.export')}
        data-for="charge-list-toolbar-export"
      >
        <button
          className="btnCircle btn-light"
          disabled={disabled}
          onClick={doExport}
          type="button"
        >
          <ButtonIcon
            loading={exportLoading}
            iconClass="far fa-file-excel"
          />
        </button>
        <ReactTooltip id="charge-list-toolbar-export" />
      </span>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.noDataToExport')}
          data-tip-disable={!disabled}
          data-for="group-list-toolbar-export-tooltip"
        >
          {button}
          <ReactTooltip id="group-list-toolbar-export-tooltip" />
        </span>
      );
    }

    return button;
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <span
        data-tip={i18n('common.destroy')}
        data-tip-disable={disabled}
        data-for="charge-list-toolbar-destroy"
      >
        <button
          disabled={disabled}
          className="btn btn-primary"
          type="button"
          onClick={doOpenDestroyAllConfirmModal}
        >
          <ButtonIcon
            loading={destroyLoading}
            iconClass="far fa-trash-alt"
          />
        </button>
        <ReactTooltip id="charge-list-toolbar-destroy" />
      </span>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="group-list-toolbar-destroy-tooltip"
        >
          {button}
          <ReactTooltip id="group-list-toolbar-destroy-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/group/new">
          <span
            data-tip={i18n('common.new')}
            data-for="charge-list-toolbar-new-tooltip"
          >
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-plus" />
            </button>
            <ReactTooltip id="charge-list-toolbar-new-tooltip" />
          </span>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/group/importer">
          <span
            data-tip={i18n('common.import')}
            data-for="charge-list-toolbar-import-tooltip"
          >
            <button
              className="btn btn-primary"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-upload" />
            </button>
            <ReactTooltip id="charge-list-toolbar-import-tooltip" />
          </span>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=group">
          <span
            data-tip={i18n('auditLog.menu')}
            data-for="charge-list-toolbar-auditLog-tooltip"
          >
            <button
              className="btnCircle btn-light"
              type="button"
            >
              <ButtonIcon iconClass="fas fa-history" />
            </button>
            <ReactTooltip id="charge-list-toolbar-auditLog-tooltip" />
          </span>
        </Link>
      )}

      {renderExportButton()}

      {destroyAllConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroyAllSelected()}
          onClose={() => doCloseDestroyAllConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </Toolbar>
  );
}

export default GroupToolbar;
