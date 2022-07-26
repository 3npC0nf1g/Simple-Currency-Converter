for (let i = 0; i < 5; i++) {
  console.log(i + " first part")
  if (i < 3) {
    continue
  } else {
    for (let j = 0; j < 5; j++) {
      console.log(j + " second part")
    }
  }
}
