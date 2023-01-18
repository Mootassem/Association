export default (app) => {
  app.post(
    `/tenant/:tenantId/type-projet`,
    require('./typeProjetCreate').default,
  );
  app.put(
    `/tenant/:tenantId/type-projet/:id`,
    require('./typeProjetUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/type-projet/import`,
    require('./typeProjetImport').default,
  );
  app.delete(
    `/tenant/:tenantId/type-projet`,
    require('./typeProjetDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/type-projet/autocomplete`,
    require('./typeProjetAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/type-projet`,
    require('./typeProjetList').default,
  );
  app.get(
    `/tenant/:tenantId/type-projet/:id`,
    require('./typeProjetFind').default,
  );
};
