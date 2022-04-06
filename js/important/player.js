var player = {
    updateSpeed: 50,
    triangleAmount: new Decimal("1e6"),
    multiplier: {
        triangle: {
            hasUnlocked: false,
            cost: new Decimal("1000"),
            costIncrease: new Decimal("10"),
            multiplier: new Decimal("1"),
            effectiveness: new Decimal("1.1")
        }
    },
    generators: {
        triangle: {
            tier1: {
                hasUnlocked: false,
                cost: new Decimal("10"),
                costIncrease: new Decimal("10"),
                lvl: new Decimal("0"),
                multiplier: new Decimal("1"),
                amountBought: 0
            },
            tier2: {
                hasUnlocked: false,
                cost: new Decimal("100"),
                costIncrease: new Decimal("10"),
                lvl: new Decimal("0"),
                multiplier: new Decimal("1"),
                amountBought: 0
            },
            tier3: {
                hasUnlocked: false,
                cost: new Decimal("1e5"),
                costIncrease: new Decimal("100"),
                lvl: new Decimal("0"),
                multiplier: new Decimal("1"),
                amountBought: 0
            },
            tier4: {
                hasUnlocked: false,
                cost: new Decimal("1e9"),
                costIncrease: new Decimal("100"),
                lvl: new Decimal("0"),
                multiplier: new Decimal("1"),
                amountBought: 0
            },
            tier5: {
                hasUnlocked: false,
                cost: new Decimal("1e12"),
                costIncrease: new Decimal("1000"),
                lvl: new Decimal("0"),
                multiplier: new Decimal("1"),
                amountBought: 0
            },
            tier6: {
                hasUnlocked: false,
                cost: new Decimal("1e18"),
                costIncrease: new Decimal("1000"),
                lvl: new Decimal("0"),
                multiplier: new Decimal("1"),
                amountBought: 0
            },
            tier7: {
                hasUnlocked: false,
                cost: new Decimal("1e24"),
                costIncrease: new Decimal("1000"),
                lvl: new Decimal("0"),
                multiplier: new Decimal("1"),
                amountBought: 0
            },
            tier8: {
                hasUnlocked: false,
                cost: new Decimal("1e30"),
                costIncrease: new Decimal("1000"),
                lvl: new Decimal("0"),
                multiplier: new Decimal("1"),
                amountBought: 0
            }
        }
    }
}