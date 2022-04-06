function updateTriangleGeneratorUI(tier) {
    document.getElementById(`tri-gen-t${tier}-lvl`).innerHTML = `LVL ${fvnd(player.generators.triangle[`tier${tier}`].lvl)}`
    document.getElementById(`tri-gen-t${tier}-mult`).innerHTML = `(${player.generators.triangle[`tier${tier}`].amountBought}) ×${fv(player.generators.triangle[`tier${tier}`].multiplier.mul(player.multiplier.triangle.multiplier))}`
    document.getElementById(`tri-gen-t${tier}-produce`).innerHTML = fv(Decimal.round(player.generators.triangle[`tier${tier}`].lvl.mul(player.generators.triangle[`tier${tier}`].multiplier).mul(player.multiplier.triangle.multiplier)))
    document.getElementById(`tri-gen-t${tier}-buy-btn-txt`).innerHTML = fv(player.generators.triangle[`tier${tier}`].cost)
    if (player.triangleAmount.gte(player.generators.triangle[`tier${tier}`].cost)) {
        document.getElementById(`tri-gen-t${tier}-buy-btn`).classList.add("btn-can-afford")
        document.getElementById(`tri-gen-t${tier}-buy-btn`).classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById(`tri-gen-t${tier}-buy-btn`).classList.add("btn-cant-afford")
        document.getElementById(`tri-gen-t${tier}-buy-btn`).classList.remove("btn-can-afford")
    }
}
function upgradeTriangleGenerator(tier) {
    if (player.generators.triangle.tier1.hasUnlocked === false && tier === 1) {
        document.getElementById("triangle-gain-txt-container").style.display = "block"
    }
    if (player.triangleAmount.gte(player.generators.triangle[`tier${tier}`].cost)) {
        player.triangleAmount = player.triangleAmount.sub(player.generators.triangle[`tier${tier}`].cost)
        player.generators.triangle[`tier${tier}`].lvl = player.generators.triangle[`tier${tier}`].lvl.add("1")
        player.generators.triangle[`tier${tier}`].amountBought++
        if (player.generators.triangle[`tier${tier}`].amountBought === 10) {
            player.generators.triangle[`tier${tier}`].amountBought = 0
            player.generators.triangle[`tier${tier}`].cost = player.generators.triangle[`tier${tier}`].cost.mul(player.generators.triangle[`tier${tier}`].costIncrease)
            player.generators.triangle[`tier${tier}`].multiplier = player.generators.triangle[`tier${tier}`].multiplier.mul("2")
        }
    }
}
function triangleGeneratorProduce() {
    player.triangleAmount = player.triangleAmount.add(player.generators.triangle.tier1.lvl.mul(player.generators.triangle.tier1.multiplier).mul(player.multiplier.triangle.multiplier).div("10"))
    player.generators.triangle.tier1.lvl = player.generators.triangle.tier1.lvl.add(player.generators.triangle.tier2.lvl.mul(player.generators.triangle.tier2.multiplier).mul(player.multiplier.triangle.multiplier).div("10"))
    player.generators.triangle.tier2.lvl = player.generators.triangle.tier2.lvl.add(player.generators.triangle.tier3.lvl.mul(player.generators.triangle.tier3.multiplier).mul(player.multiplier.triangle.multiplier).div("10"))
    player.generators.triangle.tier3.lvl = player.generators.triangle.tier3.lvl.add(player.generators.triangle.tier4.lvl.mul(player.generators.triangle.tier4.multiplier).mul(player.multiplier.triangle.multiplier).div("10"))
    player.generators.triangle.tier4.lvl = player.generators.triangle.tier4.lvl.add(player.generators.triangle.tier5.lvl.mul(player.generators.triangle.tier5.multiplier).mul(player.multiplier.triangle.multiplier).div("10"))
    player.generators.triangle.tier5.lvl = player.generators.triangle.tier5.lvl.add(player.generators.triangle.tier6.lvl.mul(player.generators.triangle.tier6.multiplier).mul(player.multiplier.triangle.multiplier).div("10"))
    player.generators.triangle.tier6.lvl = player.generators.triangle.tier6.lvl.add(player.generators.triangle.tier7.lvl.mul(player.generators.triangle.tier7.multiplier).mul(player.multiplier.triangle.multiplier).div("10"))
    player.generators.triangle.tier7.lvl = player.generators.triangle.tier7.lvl.add(player.generators.triangle.tier8.lvl.mul(player.generators.triangle.tier8.multiplier).mul(player.multiplier.triangle.multiplier).div("10"))
}