"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {
  Select,
  SelectItem,
  DatePicker,
  Chip,
  Input,
  Divider,
  Button,
} from "@nextui-org/react";
import { useMediaQuery } from "@/hooks";
import { useEffect } from "react";

const Home = () => {
  const isTablet = useMediaQuery(950);

  return (
    <div className="pb-20">
      <div className="flex items-center flex-wrap-reverse justify-between gap-3 gap-y-5 mb-10">
        <div className="items-center gap-3 grid grid-cols-3 w-full lg:flex lg:w-max">
          <Select
            variant={"underlined"}
            label="Status"
            placeholder="Select a status"
            className="lg:w-[150px]"
            classNames={{ label: styles.label }}
          >
            {[
              {
                key: "To Do",
                label: "To Do",
              },
              {
                key: "In Progress",
                label: "In Progress",
              },
              {
                key: "Done",
                label: "Done",
              },
              {
                key: "On Hold",
                label: "On Hold",
              },
            ].map((status) => (
              <SelectItem key={status.key}>{status.label}</SelectItem>
            ))}
          </Select>
          <DatePicker
            label={"Start Date"}
            variant={"underlined"}
            className="lg:w-[150px]"
            classNames={{ base: styles.baseDatePicker }}
          />
          <DatePicker
            label={"Start Date"}
            variant={"underlined"}
            className="lg:w-[150px]"
            classNames={{ base: styles.baseDatePicker }}
          />
          <Chip
            color="success"
            variant="light"
            classNames={{ content: "text-sm font-bold" }}
          >
            On Time
          </Chip>
          <div className="flex items-center justify-between gap-2 px-2 py-1 border-2 border-black rounded-lg col-span-2">
            <div className="w-full min-w-[100px]">
              <p className="text-sm leading-6 font-semibold text-[#7d7d7d] ">
                Last Edited
              </p>
              <p className="text-sm">Mina</p>
            </div>
            <div className="w-full min-w-[100px]">
              <p className="text-sm leading-6 font-semibold text-[#7d7d7d] ">
                Updated On
              </p>
              <p className="text-sm">10-05-2024</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10 w-max">
          <div>
            <p className="text-sm leading-6 font-semibold text-[#7d7d7d] ">
              Created By
            </p>
            <p className="text-sm">Jalmar</p>
          </div>
          <div>
            <p className="text-sm leading-6 font-semibold text-[#7d7d7d] ">
              Offer n*
            </p>
            <p className="text-sm">1205</p>
          </div>
          <div>
            <p className="text-sm leading-6 font-semibold text-[#7d7d7d] ">
              Invoice n*
            </p>
            <p className="text-sm">TBA</p>
          </div>
          <div>
            <p className="text-sm leading-6 font-semibold text-[#7d7d7d] ">
              Proposal Price
            </p>
            <p className="text-sm">$2.150,00</p>
          </div>
        </div>
      </div>
      <div className="flex max-[950px]:flex-col flex-row items-start gap-4">
        <div
          className={`flex w-full gap-x-10 gap-y-4 md:grid md:grid-cols-8 ${
            isTablet && "mb-5"
          }`}
        >
          <Input
            label="Company Name"
            placeholder="Enter company name"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-8 md:col-span-5"
            classNames={{
              label: styles.label,
              inputWrapper: "!rounded-md px-2",
              input: "py-3",
            }}
          />
          <div className="col-span-8 md:col-span-3 flex flex-wrap gap-2 items-end">
            <Button
              color="primary"
              radius="sm"
              variant="bordered"
              className="p-2 h-max"
            >
              E-mail...
            </Button>{" "}
            <Button
              color="primary"
              radius="sm"
              variant="bordered"
              className="p-2 h-max"
            >
              Edit Contact
            </Button>
          </div>
          <Input
            label="Contact Name"
            placeholder="Enter contact name"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-8 md:col-span-4"
            classNames={{
              label: [styles.label, styles.labelTranslate],
              inputWrapper: "!rounded-md px-2",
              input: "py-3",
            }}
          />
          <Input
            label="BTW/VAT"
            placeholder="Enter BTW/VAT"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-8 md:col-span-4"
            classNames={{
              label: [styles.label, styles.labelTranslate],
              inputWrapper: "!rounded-md px-2",
              input: "py-3",
            }}
          />
          <Input
            label="Email"
            placeholder="Email address"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-8 md:col-span-4"
            classNames={{
              label: [styles.label, styles.labelTranslate],
              inputWrapper: "!rounded-md px-2",
              input: "py-3",
            }}
          />
          <Input
            label="City/Town"
            placeholder="Region"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-8 md:col-span-4"
            classNames={{
              label: [styles.label, styles.labelTranslate],
              inputWrapper: "!rounded-md px-2",
              input: "py-3",
            }}
          />
          <Input
            label="Street"
            placeholder="Address"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-8 md:col-span-4"
            classNames={{
              label: [styles.label, styles.labelTranslate],
              inputWrapper: "!rounded-md px-2",
              input: "py-3",
            }}
          />
          <Input
            label="Number"
            placeholder="Address"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-4 md:col-span-2"
            classNames={{
              label: [styles.label, styles.labelTranslate],
              inputWrapper: "!rounded-md px-2",
              input: "py-3",
            }}
          />
          <Input
            label="Postal Code"
            placeholder="Address"
            labelPlacement="outside"
            variant="bordered"
            className="col-span-4 md:col-span-2"
            classNames={{
              label: [styles.label, styles.labelTranslate],
              inputWrapper: "!rounded-md px-2",
              input: "py-3",
            }}
          />
        </div>
        {!isTablet && (
          <Divider
            orientation="vertical"
            className="mx-5 self-center h-[300px] w-0.5"
          />
        )}
        <div
          className={`${
            isTablet ? "w-full" : "w-[500px]"
          } h-[300px] rounded-xl bg-slate-400`}
        />
      </div>
      <div className="flex flex-col mt-5 gap-2">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-[#7d7d7d] ">
            Product Summary
          </span>
          <div className="flex items-center gap-2">
            <Button color="primary" className="p-2 h-max  rounded-md">
              Edit Products
            </Button>
            <Button color="primary" className="p-2 h-max  rounded-md">
              Add Item
            </Button>
          </div>
        </div>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div
            className="flex items-center gap-5 border-2 border-black rounded-lg p-3"
            key={index}
          >
            <span className="text-xl text-center font-semibold py-1 min-w-[30px] rounded-md bg-slate-300 ">
              {index + 1}
            </span>
            <div className="flex-grow flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-5 ">
                <Select
                  variant={"underlined"}
                  placeholder="Name"
                  className="w-[200px]"
                  classNames={{ label: styles.label }}
                >
                  {[
                    {
                      key: "John",
                      label: "John",
                    },
                    {
                      key: "Mina",
                      label: "Mina",
                    },
                    {
                      key: "Jalmar",
                      label: "Jalmar",
                    },
                    {
                      key: "Lina",
                      label: "Lina",
                    },
                  ].map((status) => (
                    <SelectItem key={status.key}>{status.label}</SelectItem>
                  ))}
                </Select>
                <Select
                  variant={"underlined"}
                  placeholder="Location"
                  className="w-[200px]"
                  classNames={{ label: styles.label }}
                >
                  {[
                    {
                      key: "New York",
                      label: "New York",
                    },
                    {
                      key: "Paris",
                      label: "Paris",
                    },
                    {
                      key: "London",
                      label: "London",
                    },
                    {
                      key: "Berlin",
                      label: "Berlin",
                    },
                  ].map((status) => (
                    <SelectItem key={status.key}>{status.label}</SelectItem>
                  ))}
                </Select>
                <Select
                  variant={"underlined"}
                  label="Type"
                  labelPlacement="outside-left"
                  className="w-[130px] items-center"
                  classNames={{ label: styles.label }}
                >
                  {[
                    {
                      key: "Ready",
                      label: "Ready",
                    },
                    {
                      key: "Processing",
                      label: "Processing",
                    },
                    {
                      key: "Done",
                      label: "Done",
                    },
                    {
                      key: "On Hold",
                      label: "On Hold",
                    },
                  ].map((status) => (
                    <SelectItem key={status.key}>{status.label}</SelectItem>
                  ))}
                </Select>
                <Input
                  placeholder="Enter quantity"
                  labelPlacement="outside"
                  variant="underlined"
                  className="w-[200px]"
                  classNames={{
                    label: styles.label,
                    input: "py-3",
                  }}
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        Affiches
                      </span>
                    </div>
                  }
                />
                <Input
                  placeholder="Enter quantity"
                  labelPlacement="outside"
                  variant="underlined"
                  className="w-[200px]"
                  classNames={{
                    label: styles.label,
                    input: "py-3",
                  }}
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">
                        $/Affiches
                      </span>
                    </div>
                  }
                />
              </div>
              <div className="flex items-center gap-5">
                <Button className="h-max underline px-1" variant="light">
                  Project Timeline
                </Button>
                <Button className="h-max underline px-1" variant="light">
                  Custom Timeline
                </Button>
                <Button
                  className="h-max underline px-1 ml-auto"
                  variant="light"
                >
                  Add Discount
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Button
                color="danger"
                className="h-max underline px-1"
                variant="light"
              >
                Remove Item
              </Button>
              <div className="p-2 border-2 border-black rounded-lg">
                <div className="w-full min-w-[100px]">
                  <p className="text-sm text-end leading-none font-semibold text-[#7d7d7d] ">
                    Product Price
                  </p>
                  <p className="text-end text-sm">$ 800,00</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
