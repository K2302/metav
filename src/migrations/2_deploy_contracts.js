const Land = artifacts.require("Land")

module.exports = async function (deployer) {
    const NAME = 'DApp U Buildings'
    const SYMBOL = 'DUB'
    const COST = web3.utils.toWei('1', 'ether')

    await deployer.deploy(Land, NAME, SYMBOL, COST)
}
//0x55514e29beCA661e2e91e5fd93EB3D3fc2fEc291
