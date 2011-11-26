app.views.Home = Ext.extend(Ext.Panel, {
  xtype: 'panel',
  title: 'Home',
  iconCls: 'team',
  scroll: 'vertical',
  defaults: {
    width: '100%'
  },
  items: [
    {
      xtype: 'toolbar',
      title: 'Section 1',
      ui: 'black',
    },
    {
      xtype: 'panel',
      html: '123'
    },
    {
      xtype: 'toolbar',
      title: 'Section 2',
      ui: 'black'
    },
    {
      xtype: 'list',
      store: app.stores.listStore,
      itemTpl: '{title}'
    }
  ],
  dockedItems: [{
    xtype: 'toolbar',
    height: 46,
    dock: 'top',
    pack: 'left',
    title: 'Boilerplate',
    items: [
     
    ]
  }]

  
});