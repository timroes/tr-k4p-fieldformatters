module.exports = function (kibana) {
  return new kibana.Plugin({

    name: 'tr-k4p-fieldformatters',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      fieldFormats: ['plugins/tr-k4p-fieldformatters/trend']
    }
  });
};
