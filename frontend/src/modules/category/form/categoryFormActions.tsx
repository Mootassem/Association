import CategoryService from 'src/modules/category/categoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CATEGORY_FORM';

const categoryFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CategoryService.find(id);
      }

      dispatch({
        type: categoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryFormActions.INIT_ERROR,
      });

      getHistory().push('/category');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: categoryFormActions.CREATE_STARTED,
      });

      await CategoryService.create(values);

      dispatch({
        type: categoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.category.create.success'),
      );

      getHistory().push('/category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: categoryFormActions.UPDATE_STARTED,
      });

      await CategoryService.update(id, values);

      dispatch({
        type: categoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.category.update.success'),
      );

      getHistory().push('/category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default categoryFormActions;
