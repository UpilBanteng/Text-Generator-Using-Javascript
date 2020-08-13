(function() {
  'use strict';

  // Fungsi random array untuk mengacak array listChars
  function random(_in) {
    var current = _in.length, temp, index;
    while(0 !== current) {
      index = Math.floor(Math.random() * current);
      current -= 1;
      temp = _in[current];
      _in[current] = _in[index];
      _in[index] = temp;
    }
    return _in;
  }

  // karakter normal dan daftar jenis fonts
  var normalChars   = 'abcdefghijklmnopqrstuvwxyz';
  var listChars     = [
    'aЬcdєfgнїjкlмиоpqя$тцvшжуz',
    'двÇδзfбнijкlмиøрqяsтцрщxчz',
    '[̲̅̅a̲̅][̲̅̅b̲̅][̲̅̅c̲̅][̲̅̅d̲̅][̲̅̅e̲̅][̲̅̅f̲̅][̲̅̅g̲̅][̲̅̅h̲̅][̲̅̅i̲̅][̲̅̅j̲̅][̲̅̅k̲̅][̲̅̅l̲̅][̲̅̅m̲̅][̲̅̅n̲̅][̲̅̅o̲̅][̲̅̅p̲̅][̲̅̅q̲̅][̲̅̅r̲̅][̲̅̅s̲̅][̲̅̅t̲̅][̲̅̅u̲̅][̲̅̅v̲̅][̲̅̅w̲̅][̲̅̅x̲̅][̲̅̅y̲̅][̲̅̅z̲̅]',
    'αß¢ⅾℯƒ❡ℌḯנкłღηø℘ⓠя﹩тʊ℘ẘ✖ƴℨ',
    'ΛßƇDƐFƓĤĪĴҠĿMИ♡ṖҨŔSŦƱṖѠӾYZ',
    'αв¢đєƒgнιĵкĻмησρqяѕтυρωχуz',
    'ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยקฬאץz',
    'ﾑ乃ζÐ乇ｷǤんﾉﾌズﾚᄊ刀ԾｱQ尺丂ｲЦЏЩﾒﾘ乙',
    'ɑвς∂єƒɢɦɨʆќℓʍиღρҩʀsтµνωхγẕ',
    'ː̗̀ạ̝̇̇ː̖́ː̗̀ḅ̝̇̇ː̖́ː̗̀ċ̣̝̇ː̖́ː̗̀ḍ̝̇̇ː̖́ː̗̀ẹ̝̇̇ː̖́ː̗̀ḟ̣̝̇ː̖́ː̗̀ġ̣̝̇ː̖́ː̗̀ḥ̝̇̇ː̖́ː̗̀ị̝̇̇ː̖́ː̗̀j̣̝̇̇ː̖́ː̗̀ḳ̝̇̇ː̖́ː̗̀ḷ̝̇̇ː̖́ː̗̀ṃ̝̇̇ː̖́ː̗̀ṇ̝̇̇ː̖́ː̗̀ọ̝̇̇ː̖́ː̗̀ṗ̣̝̇ː̖́ː̗̀q̣̝̇̇ː̖́ː̗̀ṛ̝̇̇ː̖́ː̗̀ṩ̝̇ː̖́ː̗̀ṭ̝̇̇ː̖́ː̗̀ụ̝̇̇ː̖́ː̗̀ṿ̝̇̇ː̖́ː̗̀ẉ̝̇̇ː̖́ː̗̀ẋ̣̝̇ː̖́ː̗̀ỵ̝̇̇ː̖́ː̗̀ẓ̝̇̇ː̖́',
    '4BCD3F9H1JKLMNØPQR57üPWXYZ',
    'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓟⓦⓧⓨⓩ',
    'ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇndʍxʎz',
    'ΛbćdΣfghíjklmńøpqŕśtúvwxýź',
    'άв¢đє£δЂįĵкℓмйðρqяšтϋρώχчž',
    'дβćδёिĞჩįჟжსრიბ̇p̃o̖̖я$ťųაжчz',
    'ΛBCDΣFGΉIJΚŁMПOPQЯSTЦVШXΫZ',
  ];

  // Loop akan tampil sesuai array yang dirandom oleh fungsi random()
  for(var n = 0; n < listChars.length; n++) {
    var specialChars  = random(listChars)[n];
  }

  // Mengeksekusi perubahan
  function change(_in) {
    var result = '';
    var string = _in.toLowerCase();

    for(var i = 0; i < string.length; i++) {
      var chars = string.charAt(i);
      for(var j = 0; (j < normalChars.length) && (chars != normalChars.charAt(j)); j++);
      if(j < normalChars.length) {
        result += specialChars.charAt(j);
      } else {
        result += chars;
      }
    }

    return result;
  }

  var formNode = document.getElementById('form');
  formNode.addEventListener('keyup', function() {
    var textIn = document.getElementById('textin').value;
    document.getElementById('message').innerHTML = change(textIn);
  });
} ());
