const main = async () => {
    const guestBookFactory = await hre.ethers.getContractFactory("GuestBook");
    const guestBookContract = await guestBookFactory.deploy();
    await guestBookContract.deployed();
    console.log("Contract deployed to:", guestBookContract.address);
    console.log('entries:', await guestBookContract.getEntries());
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();