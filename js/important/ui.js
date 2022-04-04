window.onload = function() {
    updateUI()
}
function updateUI() {
    document.getElementById("triangle-amount-txt").innerHTML = fv(player.triangleAmount)
    
    updateTriangleGeneratorUI(1)

    setTimeout(updateUI, player.updateSpeed)
}
document.getElementById("tri-gen-t1-buy-btn").onclick = function() {
    upgradeTriangleGenerator(1)
}