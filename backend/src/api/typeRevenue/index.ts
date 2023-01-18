export default (app) => {
  app.post(
    `/tenant/:tenantId/type-revenue`,
    require('./typeRevenueCreate').default,
  );
  app.put(
    `/tenant/:tenantId/type-revenue/:id`,
    require('./typeRevenueUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/type-revenue/import`,
    require('./typeRevenueImport').default,
  );
  app.delete(
    `/tenant/:tenantId/type-revenue`,
    require('./typeRevenueDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/type-revenue/autocomplete`,
    require('./typeRevenueAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/type-revenue`,
    require('./typeRevenueList').default,
  );
  app.get(
    `/tenant/:tenantId/type-revenue/:id`,
    require('./typeRevenueFind').default,
  );
};
