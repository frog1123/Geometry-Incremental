window.onload = function() {
    updateUI()
}
function updateUI() {
    document.getElementById("triangle-amount-txt").innerHTML = fv(player.triangleAmount)
    document.getElementById("triangle-gain-txt").innerHTML = fv(player.generators.triangle.tier1.lvl.mul(player.generators.triangle.tier1.multiplier))

    updateTriangleMultiplierUI()
    
    updateTriangleGeneratorUI(1)
    updateTriangleGeneratorUI(2)

    setTimeout(updateUI, player.updateSpeed)
}
document.getElementById("tri-gen-t1-buy-btn").onclick = function() {
    upgradeTriangleGenerator(1)
}
document.getElementById("tri-gen-t2-buy-btn").onclick = function() {
    upgradeTriangleGenerator(2)
}
document.getElementById("tri-multiply-buy-btn").onclick = function() {
    buyTriangleMultiplier()
}
document.getElementById("tri-multiply-buy-btn-max").onclick = function() { 
    buyTriangleMultiplierMax()
}