Ext.regModel('app.models.listModel', {
  fields: [{name: 'id', type: 'int'}, {name: 'title', type: 'string'}]
});

app.stores.listStore = new Ext.data.Store({
  model: 'app.models.listModel',
  data: [
    {
      id: 1,
      title: 'Retail'
    },
    {
      id: 2,
      title: 'Cafes'
    },
    {
      id: 3,
      title: 'Food'
    },
    {
      id: 4, 
      title: 'Bars'
    }
  ]
});