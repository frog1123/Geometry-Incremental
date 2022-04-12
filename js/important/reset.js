function localReset() {
    player.generators.triangle.factory.amount = player.generators.triangle.factory.amount.add("1")
    if (player.generators.triangle.factory.nextTierUnlock === 8) {
        player.generators.triangle.factory.requiredAmount = player.generators.triangle.factory.requiredAmount.add(player.generators.triangle.factory.requiredAmountIncrease) 
    }

    player.triangleAmount = new Decimal("10")

    player.multiplier.triangle.hasUnlocked = false
    player.multiplier.triangle.cost = new Decimal("1000")
    player.multiplier.triangle.multiplier = new Decimal("1")

    if (player.generators.triangle.factory.nextTierUnlock <= 8) {
        player.generators.triangle.factory.nextTierUnlock++
    }

    if (player.generators.triangle.factory.amount.lte("4")) {
        player.generators.triangle[`tier${player.generators.triangle.factory.amount.add("4")}`].hasUnlocked = true
        document.getElementById(`tri-gen-t${player.generators.triangle.factory.amount.add("4")}-container`).style.display = "block"
    }

    player.generators.triangle.tier1.cost = new Decimal("10")
    player.generators.triangle.tier2.cost = new Decimal("100")
    player.generators.triangle.tier3.cost = new Decimal("1e5")
    player.generators.triangle.tier4.cost = new Decimal("1e9")
    player.generators.triangle.tier5.cost = new Decimal("1e12")
    player.generators.triangle.tier6.cost = new Decimal("1e18")
    player.generators.triangle.tier7.cost = new Decimal("1e24")
    player.generators.triangle.tier8.cost = new Decimal("1e30")

    player.generators.triangle.tier1.lvl = new Decimal("0")
    player.generators.triangle.tier2.lvl = new Decimal("0")
    player.generators.triangle.tier3.lvl = new Decimal("0")
    player.generators.triangle.tier4.lvl = new Decimal("0")
    player.generators.triangle.tier5.lvl = new Decimal("0")
    player.generators.triangle.tier6.lvl = new Decimal("0")
    player.generators.triangle.tier7.lvl = new Decimal("0")
    player.generators.triangle.tier8.lvl = new Decimal("0")

    player.generators.triangle.tier1.multiplier = new Decimal(Decimal.pow("2", player.generators.triangle.factory.amount))
    player.generators.triangle.tier2.multiplier = new Decimal(Decimal.pow("2", player.generators.triangle.factory.amount))
    player.generators.triangle.tier3.multiplier = new Decimal(Decimal.pow("2", player.generators.triangle.factory.amount))
    player.generators.triangle.tier4.multiplier = new Decimal(Decimal.pow("2", player.generators.triangle.factory.amount))
    player.generators.triangle.tier5.multiplier = new Decimal(Decimal.pow("2", player.generators.triangle.factory.amount))
    player.generators.triangle.tier6.multiplier = new Decimal(Decimal.pow("2", player.generators.triangle.factory.amount))
    player.generators.triangle.tier7.multiplier = new Decimal(Decimal.pow("2", player.generators.triangle.factory.amount))
    player.generators.triangle.tier8.multiplier = new Decimal(Decimal.pow("2", player.generators.triangle.factory.amount))

    player.generators.triangle.tier1.amountBought = 0
    player.generators.triangle.tier2.amountBought = 0
    player.generators.triangle.tier3.amountBought = 0
    player.generators.triangle.tier4.amountBought = 0
    player.generators.triangle.tier5.amountBought = 0
    player.generators.triangle.tier6.amountBought = 0
    player.generators.triangle.tier7.amountBought = 0
    player.generators.triangle.tier8.amountBought = 0
}