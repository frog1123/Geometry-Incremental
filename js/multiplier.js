var triangleMultiplierCanBuy = Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.triangleAmount.layer, player.triangleAmount.mag)).add(player.triangleAmount.mag / Math.pow(10, Math.floor(Math.log10(player.triangleAmount.mag))) > 1 ? 1 : 0).sub(Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.multiplier.triangle.cost.layer, player.multiplier.triangle.cost.mag)))))

function updateTriangleMultiplierUI() {
    triangleMultiplierCanBuy = Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.triangleAmount.layer, player.triangleAmount.mag)).add(player.triangleAmount.mag / Math.pow(10, Math.floor(Math.log10(player.triangleAmount.mag))) > 1 ? 1 : 0).sub(Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.multiplier.triangle.cost.layer, player.multiplier.triangle.cost.mag)))))

    document.getElementById("tri-multiply-buy-btn-txt").innerHTML = `Cost: ${fv(player.multiplier.triangle.cost)}`
    document.getElementById("tri-multiply-effectiveness-txt").innerHTML = `×${fv(player.multiplier.triangle.effectiveness)}`
    document.getElementById("tri-multiply-current-mult-txt").innerHTML = `×${fv(player.multiplier.triangle.multiplier)}`
    if (player.triangleAmount.gte(player.multiplier.triangle.cost)) {
        document.getElementById("tri-multiply-buy-btn").classList.add("btn-can-afford")
        document.getElementById("tri-multiply-buy-btn").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("tri-multiply-buy-btn").classList.add("btn-cant-afford")
        document.getElementById("tri-multiply-buy-btn").classList.remove("btn-can-afford")
    }
    if (triangleMultiplierCanBuy.gt(0)) {
        document.getElementById("tri-multiply-buy-btn-max-txt").innerHTML = `Buy max (${fvnd(triangleMultiplierCanBuy)})`
        document.getElementById("tri-multiply-buy-btn-max").classList.add("btn-can-afford")
        document.getElementById("tri-multiply-buy-btn-max").classList.remove("btn-cant-afford")
    }
    else {
        document.getElementById("tri-multiply-buy-btn-max-txt").innerHTML = "Buy max (0)"
        document.getElementById("tri-multiply-buy-btn-max").classList.add("btn-cant-afford")
        document.getElementById("tri-multiply-buy-btn-max").classList.remove("btn-can-afford")
    }

    // console.log(triangleMultiplierCanBuy)
}
function buyTriangleMultiplier() {
    if (player.triangleAmount.gte(player.multiplier.triangle.cost)) {
        player.triangleAmount = player.triangleAmount.sub(player.multiplier.triangle.cost)
        player.multiplier.triangle.cost = player.multiplier.triangle.cost.mul(player.multiplier.triangle.costIncrease)
        player.multiplier.triangle.multiplier = player.multiplier.triangle.multiplier.mul(player.multiplier.triangle.effectiveness)

        console.log("asdasd", Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.triangleAmount.layer, Math.floor(player.triangleAmount.mag) + 1))))
        console.log("ligma", Decimal.floor(player.triangleAmount))
        console.log("frist", Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.triangleAmount.layer, player.triangleAmount.mag))).add("1"))
        console.log("second", Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.multiplier.triangle.cost.layer, player.multiplier.triangle.cost.mag))))
    }
}
function buyTriangleMultiplierMax() {
    if (player.triangleAmount.eq("0")) {
        return
    }
    if (player.triangleAmount.gte(Decimal.pow(10, triangleMultiplierCanBuy))) {
        player.triangleAmount = player.triangleAmount.sub(Decimal.pow(10, triangleMultiplierCanBuy))
        player.multiplier.triangle.multiplier = player.multiplier.triangle.multiplier.mul(Decimal.pow(1.1, triangleMultiplierCanBuy))
        player.multiplier.triangle.cost = player.multiplier.triangle.cost.mul(Decimal.pow(player.multiplier.triangle.costIncrease, triangleMultiplierCanBuy))
        buyTriangleMultiplier()

        console.log(typeof triangleMultiplierCanBuy, triangleMultiplierCanBuy)
        // console.log(Decimal.pow("1.1", triangleMultiplierCanBuy))
    }
}