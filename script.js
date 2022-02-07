function createPassword() {
  const seed = document.querySelector("#seed").value
  const service = document.querySelector("#service").value

  if (!seed || !service) return

  document.querySelector("#passphrase").value = generatePassword(seed, service)

  document.querySelector(".result").style.display = "block"
  document.querySelector(".result label").innerText = `Password for ${service}`
}

function createPassphrase() {
  const seed = document.querySelector("#seed").value
  const service = document.querySelector("#service").value

  if (!seed || !service) return

  document.querySelector("#passphrase").value = generatePassphrase(
    seed,
    service
  );

  document.querySelector(".result").style.display = "block"
  document.querySelector(".result label").innerText = `Password for ${service}`
}

function generatePassphrase(seed, service) {
  const combo = (service + seed).toLowerCase()
  const hashObject = MD5(combo)
  const digitList = hashObject.replace(/\D/g, "").match(/.{1,4}/g)
  const words = []
  for (let x of digitList) {
    words.push(wordList()[parseInt(x) % 2048])
  }

  let generated = words.slice(0, 4).join("-")
  generated = generated.charAt(0).toUpperCase() + generated.slice(1) + "-1"
  return generated
}

function generatePassword(seed, service) {
  const specialCharacters = "!@#$%^&*()/"

  const combo = service.toLowerCase() + seed.toLowerCase()
  const hashObject = MD5(combo)
  let generated = specialCharacters[service.length % 10]
  generated += hashObject.substr(0, 7).toUpperCase()
  generated += hashObject.substr(8, 7).toLowerCase()
  generated += specialCharacters[10 - (service.length % 10)]
  return generated
}
