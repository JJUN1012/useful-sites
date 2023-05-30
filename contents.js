function updateScrollPosition1(element) {
    var scrollTop = $(window).scrollTop();
    var newPosition = scrollTop;
    var scrollSpeed = Math.abs(newPosition) * 0.1;
    // 특정 element의 스크롤 속도를 조건에 따라 바꿉니다.
    if (element.attr('id') === 'contents1') {
      if (scrollTop > 200) {
        scrollSpeed = 0;
      } else {
        scrollSpeed = 1;
      }
    }
  
    var contentsLimit = $('#contents1Limit').offset().top;
    if (scrollTop >= contentsLimit) {
      newPosition = contentsLimit;
    }
  
    element.css('transform', 'translateY(-' + newPosition + 'px)');
    $('html, body').stop().animate({ scrollTop}, scrollSpeed);
  }
  
  $(window).on('scroll', function() {
    updateScrollPosition1($('#contents1'));
  }); 

  function updateScrollPosition2(element) {
    var scrollTop = $(window).scrollTop();
    var newPosition = scrollTop;
    var scrollSpeed = Math.abs(newPosition) * 0.1;
    // 특정 element의 스크롤 속도를 조건에 따라 바꿉니다.
    if (element.attr('id') === 'contents2') {
      if (scrollTop > 200) {
        scrollSpeed = 0;
      } else {
        scrollSpeed = 1;
      }
    }
  
    var contentsLimit = $('#contents2Limit').offset().top;
    if (scrollTop >= contentsLimit) {
      newPosition = contentsLimit;
    }
  
    element.css('transform', 'translateY(-' + newPosition + 'px)');
    $('html, body').stop().animate({ scrollTop}, scrollSpeed);
  }
  
  $(window).on('scroll', function() {
    updateScrollPosition2($('#contents2'));
  });

  function updateScrollPosition3(element) {
    var scrollTop = $(window).scrollTop();
    var newPosition = scrollTop;
    var scrollSpeed = Math.abs(newPosition) * 0.1;
    // 특정 element의 스크롤 속도를 조건에 따라 바꿉니다.
    if (element.attr('id') === 'contents3') {
      if (scrollTop > 200) {
        scrollSpeed = 0;
      } else {
        scrollSpeed = 1;
      }
    }
  
    var contentsLimit = $('#contents3Limit').offset().top;
    if (scrollTop >= contentsLimit) {
      newPosition = contentsLimit;
    }
  
    element.css('transform', 'translateY(-' + newPosition + 'px)');
    $('html, body').stop().animate({ scrollTop}, scrollSpeed);
  }
  
  $(window).on('scroll', function() {
    updateScrollPosition3($('#contents3'));
  });