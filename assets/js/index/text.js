  $(function() {
      var title = document.title,
        animSeq = ["|"],
          animIndex = 0,
          titleIndex = 0;
      function doInverseSpinZeroPitch() {
          var loadTitle = title.substring(0, titleIndex);
          if (titleIndex > title.length) {
              animIndex = 0;
              titleIndex = 0
          }
          if (animIndex > 1) {
              titleIndex++;
              animIndex = 0
          }
          document.title = loadTitle + animSeq[0];
          animIndex++
      }
      window.setInterval(doInverseSpinZeroPitch, 150);
  });
$(function() {
	$(".typed").typed({
        strings: ['Welcome', "『🥀』Ｑｕａｒｔｅ", "『🥀』Kiselchik キセル", "LeRoSkE", "Valera", "Kira", "Random Nasty Man", "Very soon...!", "bruh"],
        typeSpeed: 100,
        loop: true,
        cursorChar: "|",
    });
});
