// test/ChanCoin.test.ts
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ChanCoin", function () {
  it("Should deploy and mint initial supply", async function () {
    const ChanCoin = await ethers.getContractFactory("ChanCoin");
    const chanCoin = await ChanCoin.deploy();
    await chanCoin.deployed();

    const ownerBalance = await chanCoin.balanceOf(
      await (await ethers.getSigners())[0].getAddress()
    );
    expect(await chanCoin.name()).to.equal("ChanCoin");
    expect(await chanCoin.symbol()).to.equal("CHAN");
    expect(ownerBalance).to.equal(1000000);
  });

  it("Should transfer tokens between accounts", async function () {
    const ChanCoin = await ethers.getContractFactory("ChanCoin");
    const chanCoin = await ChanCoin.deploy();
    await chanCoin.deployed();

    const [owner, addr1, addr2] = await ethers.getSigners();

    await chanCoin.transfer(addr1.address, 1000);
    expect(await chanCoin.balanceOf(addr1.address)).to.equal(1000);

    await chanCoin.connect(addr1).transfer(addr2.address, 100);
    expect(await chanCoin.balanceOf(addr2.address)).to.equal(100);
  });
});
