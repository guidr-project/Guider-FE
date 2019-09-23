import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("home", "Projects");
const characterLabel = createLabel("users", "FAQs");
const locationLabel = createLabel("map", "About");
const episodeLabel = createLabel("angle right icon", "Sign in");

const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/`} content={welcomeLabel} />
  },
  {
    menuItem: (
      <Menu.Item
        key="characters"
        as={Nav}
        to={`/characters`}
        content={characterLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="locations"
        as={Nav}
        to={`/locations`}
        content={locationLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="episodes"
        as={Nav}
        to={`/episodes`}
        content={episodeLabel}
      />
    )
  }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;