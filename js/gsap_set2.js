
$(window).on('load', function() {
  $('.bgm').get(0).play();
});
///////////////////////////////////////////////////
//timeline.to 에서 to를 통해 해당 요소에 명령 입력
///////////////////////////////////////////////////
gsap.to("#pintest", {
    scrollTrigger: {
      trigger: "#pintest", //트리거용 요소
      pin: "#pintest", //true,false로 핀 유무 결정, 요소로 입력시 해당 요소가 고정됨
      start: "600 center", //요소 트리거위치, 뷰포트 트리거 위치
      end: "+=1000", //트리거가 끝날때까지의 길이(px)
    //   markers: true,
    },
  });
  gsap.to("#pintest2", {
    scrollTrigger: {
      trigger: "#pintest2", //트리거용 요소
      pin: "#pintest2", //true,false로 핀 유무 결정, 요소로 입력시 해당 요소가 고정됨
      start: "800 center", //요소 트리거위치, 뷰포트 트리거 위치
      end: "+=1000", //트리거가 끝날때까지의 길이(px)
      // markers: true,
    },
  });
  gsap.to("#pintest3", {
    scrollTrigger: {
      trigger: "#pintest3", //트리거용 요소
      pin: "#pintest3", //true,false로 핀 유무 결정, 요소로 입력시 해당 요소가 고정됨
      start: "600 center", //요소 트리거위치, 뷰포트 트리거 위치
      end: "+=0", //트리거가 끝날때까지의 길이(px)
      // markers: true,
    },
  });

  gsap.to("#pintest4", {
    scrollTrigger: {
      trigger: "#pintest4", //트리거용 요소
      pin: "#pintest4", //true,false로 핀 유무 결정, 요소로 입력시 해당 요소가 고정됨
      start: "center center", //요소 트리거위치, 뷰포트 트리거 위치
      end: "+=500", //트리거가 끝날때까지의 길이(px)
      // markers: true,
    },
  });
  gsap.to(".hand_2", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#pintest4", //트리거용 요소
      pin: "#pintest4", //true,false로 핀 유무 결정, 요소로 입력시 해당 요소가 고정됨
      start: "center center", //요소 트리거위치, 뷰포트 트리거 위치
      end: "+=500", //트리거가 끝날때까지의 길이(px)
      // markers: true,
    },
  });
  gsap.to(".hand_3", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#pintest4", //트리거용 요소
      pin: "#pintest4", //true,false로 핀 유무 결정, 요소로 입력시 해당 요소가 고정됨
      start: "center center", //요소 트리거위치, 뷰포트 트리거 위치
      end: "+=500", //트리거가 끝날때까지의 길이(px)
      // markers: true,
    },
  });
  ///////////////////////////////////////////////////
  gsap.to(".xmove", {
    scale: 4,
    duration: 1,
    scrollTrigger: {
        // markers: true,
      trigger: '.xmove',
      start: 'center center', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
      end: 'top top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
      scrub: 1, //수치를 통해서 원복 방식의 부드러움을 가중시킬 수 있음(true 사용 가능)
      //        markers: true,
    //   onEnter: () => $('.xmove').addClass('bg-danger'),
      //뷰포트에 xmove가 나타날 경우 특정요소를 추가
    //   onLeave: () => $('.xmove').removeClass('bg-danger'),
      //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
    },
  });

  
gsap.to(".xmove2", {
  duration: 4,
  scrollTrigger: {
    trigger: '.xmove2',
    start: 'center bottom', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
    end: 'top top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
    scrub: 1, //수치를 통해서 원복 방식의 부드러움을 가중시킬 수 있음(true 사용 가능)
    //        markers: true,
    onEnter: () => {
    $('.xmove2').addClass('typewriter1-0')
    $('.typing')[0].play();
  },
  onLeave: () => {
    $('.typing')[0].pause();
  },
    //뷰포트에 xmove가 나타날 경우 특정요소를 추가
    // onLeave: () => $('.xmove2').removeClass('typewriter1-1'),
    //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
  },
});
gsap.to(".xmove3", {
  duration: 4,
  scrollTrigger: {
    trigger: '.xmove3',
    start: 'center bottom', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
    end: 'top top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
    scrub: 1, //수치를 통해서 원복 방식의 부드러움을 가중시킬 수 있음(true 사용 가능)
    //        markers: true,
    onEnter: () => {
      $('.xmove3').addClass('typewriter1-1')
      $('.typing')[0].play();
    },
    onLeave: () => {
      $('.typing')[0].pause();
    },
    //뷰포트에 xmove가 나타날 경우 특정요소를 추가
    // onLeave: () => $('.xmove2').removeClass('typewriter1-1'),
    //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
  },
});
gsap.to(".xmove4", {
  duration: 4,
  scrollTrigger: {
    trigger: '.xmove4',
    start: 'center bottom', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
    end: 'top top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
    scrub: 1, //수치를 통해서 원복 방식의 부드러움을 가중시킬 수 있음(true 사용 가능)
    //        markers: true,
    onEnter: () => $('.xmove4').addClass('typewriter1-1'),
    //뷰포트에 xmove가 나타날 경우 특정요소를 추가
    // onLeave: () => $('.xmove2').removeClass('typewriter1-1'),
    //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
  },
});
gsap.to(".xmove5", {
  scale: 100,
  y: "800%",
  x: "800%",
  duration: 1,
  scrollTrigger: {
    trigger: '.xmove5',
    start: '400 center', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
    end: '2000px top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
    scrub: 1, //수치를 통해서 원복 방식의 부드러움을 가중시킬 수 있음(true 사용 가능)
          //  markers: true,
           onLeave: () => $('.xmove5').addClass('d-none'),
    // onEnter: () => $('.xmove4').addClass('typewriter1-1'),
    //뷰포트에 xmove가 나타날 경우 특정요소를 추가
    // onLeave: () => $('.xmove2').removeClass('typewriter1-1'),
    //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
  },
});

gsap.to(".xmove6", {
  opaicty: 1,
  duration: 1,
  scrollTrigger: {
    trigger: '.xmove6',
    start: 'center bottom', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
    end: 'top top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
    scrub: 1, //수치를 통해서 원복 방식의 부드러움을 가중시킬 수 있음(true 사용 가능)
    //        markers: true,
    // onEnter: () => $('.xmove4').addClass('typewriter1-1'),
    //뷰포트에 xmove가 나타날 경우 특정요소를 추가
    // onLeave: () => $('.xmove2').removeClass('typewriter1-1'),
    //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
  },
});

gsap.to(".xmove7", {
  scrollTrigger: {
    trigger: '.xmove7',
    start: 'center bottom', //앞에 값은 요소 내부에 위치시킬 트리거 시작지점, 뒤에 값은 화면 자체의 트리거 시작지점
    end: 'top top', //앞에 값은 요소 내부에 위치시킬 트리거 종료지점, 뒤에 값은 화면 자체의 트리거 종료지점
          //  markers: true,
    onEnter: () => {
      $('#my-video')[0].play();
      $('.bgm')[0].pause();
      setTimeout(function() {
        $('body').empty();
        $('body').append( '<div class="end-title opacity-0">END</div>' );
        $('.opacity-0').addClass('bg_on').removeClass('opacity-0');
      }, 7500);
    },
    //뷰포트에 xmove가 나타날 경우 특정요소를 추가
    // onLeave: () => $('.xmove2').removeClass('typewriter1-1'),
    //뷰포트에 xmove가 사라질 경우 특정요소를 삭제
  },
});
  /////////////////////////////////////////////////
  gsap.to("#id", {
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#id",
    },
  });
  gsap.to("#id", {
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#id",
    },
  });