import React from "react";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Button from "./components/Button";
import Banner from "./components/Banner";

export default function App() {
  return (
    <div className="app-container">
      <Heading className="header-heading">Buttons components</Heading>
      <div className="parent-cont">
        <div className="child-one">
          <Subheading className="sub-heading">Square</Subheading>
          <Button className="general-btn" radius="square" color="purple">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="gray">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="red">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="blue">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="green">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="pink">
            Badge
          </Button>
        </div>
        {/* 2nd child */}

        <div className="child-one">
          <Subheading className="sub-heading">Round</Subheading>
          <Button className="general-btn" radius="round" color="purple">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="gray">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="red">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="blue">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="green">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="pink">
            Badge
          </Button>
        </div>
      </div>
      <Heading className="header-heading">Banner components</Heading>
      <div className="banner-cont">
        <Banner message="congrats">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam.
        </Banner>
      </div>
    </div>
  );
}
