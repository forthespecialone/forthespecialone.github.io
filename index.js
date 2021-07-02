$(document).ready(()=> {
  ym(82330312,'reachGoal','OPENED')
	$('#form').on('submit', (e)=> {
    e.preventDefault()
    let p = $('#pass').val()
    try {
      let decrypted = CryptoJS.AES.decrypt(encrypted, p)
      let msg = decrypted.toString(CryptoJS.enc.Utf8)
      if (msg[0] !== '<') throw new Error('No doggy')
      ym(82330312,'reachGoal','PASSED')
      $('#content').html(msg)
    } catch (e) {
      ym(82330312,'reachGoal','FAILED')
      $('#pass').val('')
      alert('Упс, ошибочка. Попробуй еще раз. Если ты уверена, что пароль правильный, попробуй перезагрузить страницу )')
    }
  })
})
let encrypted = CryptoJS.AES.encrypt("Если ты это читаешь, то обнови страницу и введи пароль заново", "pass").toString();

encrypted="zzz"