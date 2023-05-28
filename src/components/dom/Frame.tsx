"use client";
// make fixed frame that covers whole screen, has simple header in right corner
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Camera } from "@/lib/types";

type Props = {
  camera: Camera;
  setCamera: (camera: Camera) => void;
};

const cameras = [
  { id: 0, name: "perspective", display: "Perspective" },
  { id: 1, name: "orthographic", display: "Orthographic" },
];

export default function Frame({ camera, setCamera }: Props) {
  const selectCamera = (newCamera: Camera) => {
    setCamera(newCamera);
  };

  return (
    <div className="z-[1] fixed w-32 p-2 bg-contrast bottom-[6vh] right-16 h-fit rounded-xl">
      <Listbox
        as="section"
        className="flex flex-col justify-center"
        value={camera}
        onChange={selectCamera}
      >
        <Listbox.Button>{camera.display}</Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="flex flex-col items-center">
            {cameras.map((cam) => {
              if (cam.name !== camera.name) {
                return (
                  <Listbox.Option
                    className="cursor-pointer w-fit ui-active:bg-blue-500"
                    key={cam.id}
                    value={cam}
                  >
                    {cam.display}
                  </Listbox.Option>
                );
              }
            })}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
