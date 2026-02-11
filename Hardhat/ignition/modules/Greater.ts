import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GreaterModule = buildModule("GreaterModule", (m) => {
  const unlockTime = m.getParameter(
    "unlockTime",
    Math.floor(Date.now() / 1000) + 3600 // 1 hour in future
  );

  const greater = m.contract("Greater", [unlockTime]);

  return { greater };
});

export default GreaterModule;

