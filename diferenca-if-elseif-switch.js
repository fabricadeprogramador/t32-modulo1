let x = 3

//IF ANINHADO
if (x == 1) {
  alert('A')
} else {
  if (x == 2) {
    alert('B')
  } else {
    if (x == 3) {
      alert('C')
    } else {
      if (x == 4) {
        alert('D')
      } else {
        alert('Inválido')
      }
    }
  }
}

//<=>
//ELSE-IF
if (x == 1) {
  alert('A')
} else if (x == 2) {
  alert('B')
} else if (x == 3) {
  alert('C')
} else if (x == 4) {
  alert('D')
} else {
  alert('Inválido')
}

//<=>
//SWITCH

switch (x) {
  case 1:
    alert('A')
    break
  case 2:
    alert('B')
    break
  case 3:
    alert('C')
    break
  case 4:
    alert('D')
    break
  default:
    alert('Inválido')
    break
}
