export function setAntispam() {
    localStorage.setItem("antispam", String((new Date().getMilliseconds() + 259200000)))
}

export function isAntispam() {
    const antispam = localStorage.getItem("antispam")
    if (!antispam) return false
    return Number(antispam) > new Date().getMilliseconds()
}