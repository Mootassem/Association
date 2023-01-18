import listActions from 'src/modules/typeRevenue/list/typeRevenueListActions';
import TypeRevenueService from 'src/modules/typeRevenue/typeRevenueService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TYPEREVENUE_DESTROY';

const typeRevenueDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: typeRevenueDestroyActions.DESTROY_STARTED,
      });

      await TypeRevenueService.destroyAll([id]);

      dispatch({
        type: typeRevenueDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.typeRevenue.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/type-revenue');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: typeRevenueDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: typeRevenueDestroyActions.DESTROY_ALL_STARTED,
      });

      await TypeRevenueService.destroyAll(ids);

      dispatch({
        type: typeRevenueDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.typeRevenue.destroyAll.success'),
      );

      getHistory().push('/type-revenue');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: typeRevenueDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default typeRevenueDestroyActions;
