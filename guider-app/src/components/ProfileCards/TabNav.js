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

const welcomeLabel = createLabel("map", "Create Journey");
const characterLabel = createLabel("compass", "Your Journeys");
const locationLabel = createLabel("globe", "All Journeys");
const episodeLabel = createLabel("thumbs up", "Profile");
const logoutLabel = createLabel("thumbs up", "log Out");

// const logOut = () => {
//   localStorage.clear()
//   props.history.push('/')
// }

const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/homepage`} content={welcomeLabel} />
  },
  {
    menuItem: (
      <Menu.Item
        key="characters"
        as={Nav}
        to={`/homepage/journey`}
        content={characterLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="locations"
        as={Nav}
        to={`/homepage/alljourneys`}
        content={locationLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="welcome"
        as={Nav}
        to={`/homepage/profile`}
        content={episodeLabel}
      />
    )
  },
  // {
  //   menuItem: (
  //     <Menu.Item
  //       key="logout"
  //       as={Nav}
  //       to={`/`}
  //       content={logoutLabel}
  //       //onClick = {logOut}
  //     />
  //   )
  // }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
