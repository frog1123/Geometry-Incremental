window.onload = function() {
    updateUI()
}
function updateUI() {
    document.getElementById("triangle-amount-txt").innerHTML = fv(player.triangleAmount)
    document.getElementById("triangle-gain-txt").innerHTML = fv(player.generators.triangle.tier1.lvl.mul(player.generators.triangle.tier1.multiplier))

    updateTriangleMultiplierUI()
    
    updateTriangleGeneratorUI(1)
    updateTriangleGeneratorUI(2)
    updateTriangleGeneratorUI(3)
    updateTriangleGeneratorUI(4)
    updateTriangleGeneratorUI(5)
    updateTriangleGeneratorUI(6)
    updateTriangleGeneratorUI(7)
    updateTriangleGeneratorUI(8)

    setTimeout(updateUI, player.updateSpeed)
}
document.getElementById("tri-gen-t1-buy-btn").onclick = function() {
    upgradeTriangleGenerator(1)
}
document.getElementById("tri-gen-t2-buy-btn").onclick = function() {
    upgradeTriangleGenerator(2)
}
document.getElementById("tri-gen-t3-buy-btn").onclick = function() {
    upgradeTriangleGenerator(3)
}
document.getElementById("tri-gen-t4-buy-btn").onclick = function() {
    upgradeTriangleGenerator(4)
}
document.getElementById("tri-gen-t5-buy-btn").onclick = function() {
    upgradeTriangleGenerator(5)
}
document.getElementById("tri-gen-t6-buy-btn").onclick = function() {
    upgradeTriangleGenerator(6)
}
document.getElementById("tri-gen-t7-buy-btn").onclick = function() {
    upgradeTriangleGenerator(7)
}
document.getElementById("tri-gen-t8-buy-btn").onclick = function() {
    upgradeTriangleGenerator(8)
}
document.getElementById("tri-multiply-buy-btn").onclick = function() {
    buyTriangleMultiplier()
}
document.getElementById("tri-multiply-buy-btn-max").onclick = function() { 
    buyTriangleMultiplierMax()
}