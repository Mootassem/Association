import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/campaignItems/view/campaignItemsViewActions';
import selectors from 'src/modules/campaignItems/view/campaignItemsViewSelectors';
import CampaignItemsView from 'src/view/campaignItems/view/CampaignItemsView';
import CampaignItemsViewToolbar from 'src/view/campaignItems/view/CampaignItemsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CampaignItemsPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.campaignItems.menu'), '/campaign-items'],
          [i18n('entities.campaignItems.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.campaignItems.view.title')}
        </PageTitle>

        <CampaignItemsViewToolbar match={match} />

        <CampaignItemsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default CampaignItemsPage;
