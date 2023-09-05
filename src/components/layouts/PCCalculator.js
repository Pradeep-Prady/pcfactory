import React, { useState } from "react";
import data from "../data";
import calsi from "../../assets/calsi.png";

export default function PCCalculator() {
  const [total, setTotal] = useState(0);

  const [cpu, setCpu] = useState("select");
  const [cpuImage, setCpuImage] = useState("");

  const [motherboard, setMotherboard] = useState("select");
  const [motherboardImage, setMotherboardImage] = useState("");

  const [memory, setMemory] = useState("select");
  const [memoryImage, setMemoryImage] = useState("");

  const [storage, setStorage] = useState("select");
  const [storageImage, setStorageImage] = useState("");

  const [powersupplyunit, setPowerSupplyUnit] = useState("select");
  const [powersupplyunitImage, setPowerSupplyUnitImage] = useState("");

  const [gpu, setGPU] = useState("select");
  const [gpuImage, setGPUImage] = useState("");

  const [coolingSystem, setCoolingSystem] = useState("select");
  const [coolingSystemImage, setCoolingSystemImage] = useState("");

  const [os, setOs] = useState("select");
  const [osImage, setOsImage] = useState("");

  const [ramSlot1, setRamSlot1] = useState("select");
  const [ramSlot2, setRamSlot2] = useState("select");
  const [ramSlot3, setRamSlot3] = useState("select");
  const [ramSlot4, setRamSlot4] = useState("select");

  const [ramSlot1Price, setRamSlot1Price] = useState(0);
  const [ramSlot2Price, setRamSlot2Price] = useState(0);
  const [ramSlot3Price, setRamSlot3Price] = useState(0);
  const [ramSlot4Price, setRamSlot4Price] = useState(0);

  const [storageSlot1, setStorageSlot1] = useState("select");
  const [storageSlot2, setStorageSlot2] = useState("select");
  const [storageSlot3, setStorageSlot3] = useState("select");
  const [storageSlot4, setStorageSlot4] = useState("select");

  const [storageSlot1Price, setStorageSlot1Price] = useState(0);
  const [storageSlot2Price, setStorageSlot2Price] = useState(0);
  const [storageSlot3Price, setStorageSlot3Price] = useState(0);
  const [storageSlot4Price, setStorageSlot4Price] = useState(0);

  const handleChange = (e) => {
    const selected = e.target;

    switch (selected.name) {
      case "cpu":
        setCpu(selected.value);
        const cpuObject = data.cpuData.find((c) => c.name === selected.value);
        setCpuImage(cpuObject.img);
        break;
      case "memory":
        setMemory(selected.value);
        const mObject = data.memoryData.find((c) => c.name === selected.value);
        setMemoryImage(mObject.img);
        break;

      case "motherboard":
        setMotherboard(selected.value);
        const mbObject = data.motherboardData.find(
          (c) => c.name === selected.value
        );
        setMotherboardImage(mbObject.img);
        break;

      case "psu":
        setPowerSupplyUnit(selected.value);
        const pObject = data.psuData.find((c) => c.name === selected.value);
        setPowerSupplyUnitImage(pObject.img);
        break;
      case "storage":
        setStorage(selected.value);
        const sObject = data.storageData.find((c) => c.name === selected.value);
        setStorageImage(sObject.img);
        break;
      case "gpu":
        setGPU(selected.value);
        const gObject = data.graphicsData.find(
          (c) => c.name === selected.value
        );
        setGPUImage(gObject.img);
        break;
      case "cooling":
        setCoolingSystem(selected.value);
        const cObject = data.coolingData.find((c) => c.name === selected.value);
        setCoolingSystemImage(cObject.img);
        break;

      case "os":
        setOs(selected.value);
        const oObject = data.osData.find((c) => c.name === selected.value);
        setOsImage(oObject.img);
        break;

      default:
        break;
    }
  };

  const handleRamChange = (e) => {
    const selected = e.target;
    const selectedGb = parseInt(selected.value);

    const selectedMemory = data.memoryData.find((m) => m.name === memory);
    const selectedRamOption = selectedMemory.ram.find(
      (ramOption) => ramOption.gb === selectedGb
    );

    if (selected.name === "ramslot1") {
      setRamSlot1(selectedGb);
      setRamSlot1Price(selectedRamOption ? selectedRamOption.price : 0);
    }

    if (selected.name === "ramslot2") {
      setRamSlot2(selectedGb);
      setRamSlot2Price(selectedRamOption ? selectedRamOption.price : 0);
    }

    if (selected.name === "ramslot3") {
      setRamSlot3(selectedGb);
      setRamSlot3Price(selectedRamOption ? selectedRamOption.price : 0);
    }

    if (selected.name === "ramslot4") {
      setRamSlot4(selectedGb);
      setRamSlot4Price(selectedRamOption ? selectedRamOption.price : 0);
    }
  };

  const handleStorageChange = (e) => {
    const selected = e.target;
    const selectedS = selected.value;

    const selectedStorage = data.storageData.find((m) => m.name === storage);
    const selectedStorageOption = selectedStorage.detail.find(
      (storageOption) => storageOption.size === selectedS
    );

    if (selected.name === "storageSlot1") {
      setStorageSlot1(selectedS);
      setStorageSlot1Price(
        selectedStorageOption ? selectedStorageOption.price : 0
      );
    }

    if (selected.name === "storageSlot2") {
      setStorageSlot2(selectedS);
      setStorageSlot2Price(
        selectedStorageOption ? selectedStorageOption.price : 0
      );
    }

    if (selected.name === "storageSlot3") {
      setStorageSlot3(selectedS);
      setStorageSlot3Price(
        selectedStorageOption ? selectedStorageOption.price : 0
      );
    }

    if (selected.name === "storageSlot4") {
      setStorageSlot4(selectedS);
      setStorageSlot4Price(
        selectedStorageOption ? selectedStorageOption.price : 0
      );
    }
  };

  const findTotal = (e) => {
    e.preventDefault();

    let totalPrice = 0;

    if (cpu !== "select") {
      const cpuObject = data.cpuData.find((c) => c.name === cpu);
      totalPrice += cpuObject.price;
    }

    if (motherboard !== "select") {
      const motherboardObject = data.motherboardData.find(
        (c) => c.name === motherboard
      );
      totalPrice += motherboardObject.price;
    }

    if (gpu !== "select") {
      const graphicsObject = data.graphicsData.find((c) => c.name === gpu);
      totalPrice += graphicsObject.price;
    }

    if (powersupplyunit !== "select") {
      const psuObject = data.psuData.find((c) => c.name === powersupplyunit);
      totalPrice += psuObject.price;
    }

    if (coolingSystem !== "select") {
      const coolingObject = data.coolingData.find(
        (c) => c.name === coolingSystem
      );
      totalPrice += coolingObject.price;
    }

    if (os !== "select") {
      const osObject = data.osData.find((c) => c.name === os);
      totalPrice += osObject.price;
    }

    if (memory !== "select") {
      let totalramprice =
        ramSlot1Price + ramSlot2Price + ramSlot3Price + ramSlot4Price;
      totalPrice += totalramprice;
    }

    if (storage !== "select") {
      let totalstorageprice =
        storageSlot1Price +
        storageSlot2Price +
        storageSlot3Price +
        storageSlot4Price;
      totalPrice += totalstorageprice;
    }

    setTotal(totalPrice);
  };

  return (
    <div className="w-full h-auto md:h-screen bg-mygreen ">
      <h2 className="text-center text-3xl py-3 font-bold ">
        <span className="text-mywhite">PC</span> Calculator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex items-center justify-center">
          <form className="font-medium w-5/6 text-sm sm:text-base">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
              <label className=" ">CPU</label>
              <select
                name="cpu"
                className="border-none  text-myblack   outline-none bg-myorange px-2 py-1"
                onChange={handleChange}
              >
                <option value={cpu}>select</option>
                {data.cpuData.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
              <label>Motherboard</label>
              <select
                name="motherboard"
                className="border-none  text-myblack   outline-none bg-myorange px-2 py-1"
                onChange={handleChange}
              >
                <option value={motherboard}>select</option>
                {data.motherboardData.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
              <label>Graphics Processing Unit (GPU)</label>
              <select
                name="gpu"
                className="border-none  text-myblack   outline-none bg-myorange px-2 py-1"
                onChange={handleChange}
              >
                <option value={gpu}>select</option>
                {data.graphicsData.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
              <label>Power Supply Unit</label>
              <select
                name="psu"
                className="border-none  text-myblack   outline-none bg-myorange px-2 py-1"
                onChange={handleChange}
              >
                <option value={powersupplyunit}>select</option>
                {data.psuData.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
              <label>Cooling System</label>
              <select
                name="cooling"
                className="border-none  text-myblack   outline-none bg-myorange px-2 py-1"
                onChange={handleChange}
              >
                <option value={coolingSystem}>select</option>
                {data.coolingData.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
              <label> Windows operating system</label>
              <select
                name="os"
                className="border-none  text-myblack   outline-none bg-myorange px-2 py-1"
                onChange={handleChange}
              >
                <option value={os}>select</option>
                {data.osData.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
              <label>Memory</label>
              <select
                name="memory"
                className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                onChange={handleChange}
              >
                <option value={memory}>select</option>
                {data.memoryData.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
            </div>
            {memory !== undefined && memory !== "select" ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
                <label>Ram</label>
                <div className="grid grid-cols-4 gap-1">
                  <select
                    name="ramslot1"
                    className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                    onChange={handleRamChange}
                  >
                    <option value="select">select</option>
                    {data.memoryData
                      .find((m) => m.name === memory)
                      .ram.map((ramOption, index) => (
                        <option key={index} value={ramOption.gb}>
                          {ramOption.gb} GB - ${ramOption.price}
                        </option>
                      ))}
                  </select>
                  {ramSlot1 !== "select" && (
                    <select
                      name="ramslot2"
                      className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                      onChange={handleRamChange}
                    >
                      <option value="select">select</option>
                      {data.memoryData
                        .find((m) => m.name === memory)
                        .ram.map((ramOption, index) => (
                          <option key={index} value={ramOption.gb}>
                            {ramOption.gb} GB - ${ramOption.price}
                          </option>
                        ))}
                    </select>
                  )}
                  {ramSlot2 !== "select" && (
                    <select
                      name="ramslot3"
                      className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                      onChange={handleRamChange}
                    >
                      <option value="select">select</option>
                      {data.memoryData
                        .find((m) => m.name === memory)
                        .ram.map((ramOption, index) => (
                          <option key={index} value={ramOption.gb}>
                            {ramOption.gb} GB - ${ramOption.price}
                          </option>
                        ))}
                    </select>
                  )}

                  {ramSlot3 !== "select" && (
                    <select
                      name="ramslot4"
                      className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                      onChange={handleRamChange}
                    >
                      <option value="select">select</option>
                      {data.memoryData
                        .find((m) => m.name === memory)
                        .ram.map((ramOption, index) => (
                          <option key={index} value={ramOption.gb}>
                            {ramOption.gb} GB - ${ramOption.price}
                          </option>
                        ))}
                    </select>
                  )}
                </div>
              </div>
            ) : null}

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
              <label>Storage</label>
              <select
                name="storage"
                className="border-none  text-myblack   outline-none bg-myorange px-2 py-1"
                onChange={handleChange}
              >
                <option value={storage}>select</option>
                {data.storageData.map((c, index) => (
                  <option key={index}>{c.name}</option>
                ))}
              </select>
            </div>

            {storage !== undefined && storage !== "select" ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 my-4">
                <label>Size</label>
                <div className="grid grid-cols-4 gap-1">
                  <select
                    name="storageSlot1"
                    className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                    onChange={handleStorageChange}
                  >
                    <option value="select">select</option>
                    {data.storageData
                      .find((m) => m.name === storage)
                      .detail.map((ramOption, index) => (
                        <option key={index} value={ramOption.gb}>
                          {ramOption.size}
                        </option>
                      ))}
                  </select>
                  {storageSlot1 !== "select" && (
                    <select
                      name="storageSlot2"
                      className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                      onChange={handleStorageChange}
                    >
                      <option value="select">select</option>
                      {data.storageData
                        .find((m) => m.name === storage)
                        .detail.map((ramOption, index) => (
                          <option key={index} value={ramOption.gb}>
                            {ramOption.size}
                          </option>
                        ))}
                    </select>
                  )}
                  {storageSlot2 !== "select" && (
                    <select
                      name="storageSlot3"
                      className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                      onChange={handleStorageChange}
                    >
                      <option value="select">select</option>
                      {data.storageData
                        .find((m) => m.name === storage)
                        .detail.map((ramOption, index) => (
                          <option key={index} value={ramOption.gb}>
                            {ramOption.size}
                          </option>
                        ))}
                    </select>
                  )}

                  {storageSlot3 !== "select" && (
                    <select
                      name="storageSlot4"
                      className="border-none text-myblack outline-none bg-myorange px-2 py-1"
                      onChange={handleStorageChange}
                    >
                      <option value="select">select</option>
                      {data.storageData
                        .find((m) => m.name === storage)
                        .detail.map((ramOption, index) => (
                          <option key={index} value={ramOption.gb}>
                            {ramOption.size}
                          </option>
                        ))}
                    </select>
                  )}
                </div>
              </div>
            ) : null}

            <div className="w-full grid grid-cols-1 my-10">
              <button
                className="bg-myorange px-3 py-1 rounded-sm "
                onClick={findTotal}
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
        <div className="bg-cals flex items-center justify-center overflow-hidden">
          <img className="z-10 absolute blur-sm w-[350px] sm:w-[380px] lg:w-[550px] " src={calsi} alt="pcImage" />
          <div className="w-3/6 z-50 ">
            <div className=" grid grid-cols-3 gap-7 ">
              <div className="border-4 bg-myblack flex items-center justify-center w-[60px] h-[60px]">
                {cpuImage ? (
                  <img
                    className="w-[50px] h-[50px] "
                    src={cpuImage}
                    alt="cpu"
                  />
                ) : (
                  <p className="font-semibold text-sm text-white"> CPU</p>
                )}
              </div>
              <div className="border-4 flex bg-myblack items-center justify-center w-[60px] h-[60px]">
                {motherboardImage ? (
                  <img
                    className="w-[50px] h-[50px] "
                    src={motherboardImage}
                    alt="motherboard"
                  />
                ) : (
                  <p className="font-semibold text-sm text-white">
                    {" "}
                    Mother Board
                  </p>
                )}
              </div>
              <div className="border-4 flex bg-myblack items-center justify-center w-[60px] h-[60px]">
                {gpuImage ? (
                  <img
                    className="w-[50px] h-[50px] "
                    src={gpuImage}
                    alt="gpuImage"
                  />
                ) : (
                  <p className="font-semibold text-sm text-white">GPU</p>
                )}
              </div>
              <div className="border-4 flex bg-myblack items-center justify-center w-[60px] h-[60px]">
                {powersupplyunitImage ? (
                  <img
                    className="w-[50px] h-[50px] "
                    src={powersupplyunitImage}
                    alt="powersupplyunitImage"
                  />
                ) : (
                  <p className="font-semibold text-sm text-white">
                    Power Supply
                  </p>
                )}
              </div>
              <div className="border-4 flex bg-myblack items-center justify-center w-[60px] h-[60px]">
                {coolingSystemImage ? (
                  <img
                    className="w-[50px] h-[50px] "
                    src={coolingSystemImage}
                    alt="coolingSystemImage"
                  />
                ) : (
                  <p className="font-semibold text-sm text-white">Cooler</p>
                )}
              </div>
              <div className="border-4 flex bg-myblack items-center justify-center w-[60px] h-[60px]">
                {osImage ? (
                  <img
                    className="w-[50px] h-[50px] "
                    src={osImage}
                    alt="osImage"
                  />
                ) : (
                  <p className="font-semibold text-sm text-white">OS</p>
                )}
              </div>
              <div className="border-4 flex bg-myblack items-center justify-center w-[60px] h-[60px]">
                {memoryImage ? (
                  <img
                    className="w-[50px] h-[50px] "
                    src={memoryImage}
                    alt="memoryImage"
                  />
                ) : (
                  <p className="font-semibold text-sm text-white">Memory</p>
                )}
              </div>{" "}
              <div className="border-4 flex bg-myblack items-center justify-center w-[60px] h-[60px]">
                {storageImage ? (
                  <img
                    className="w-[50px] h-[50px] "
                    src={storageImage}
                    alt="storageImage"
                  />
                ) : (
                  <p className="font-semibold text-sm text-white">Storage</p>
                )}
              </div>
            </div>
            <div className="w-full my-10 text-center">
              <p className="border-none font-semibold text-myblack outline-none bg-myorange p-2 rounded-sm">
                Total : {total}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
