const cheerio = require('cheerio');

hexo.extend.filter.register('after_render:html', function(str, data) {
  if (!str) return str;
  
  const $ = cheerio.load(str, {
    decodeEntities: false
  });

  // 处理文章内容中的图片
  $('img').each(function() {
    const $img = $(this);
    const src = $img.attr('src');
    
    if (src) {
      // 添加懒加载属性
      $img.attr('data-src', src);
      $img.attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'); // 1x1 透明图片
      $img.attr('loading', 'lazy');
    }
  });

  return $.html();
}); 