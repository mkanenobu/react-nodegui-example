import React from "react";
import { Text, Window, hot, View } from "@nodegui/react-nodegui";
import { QIcon } from "@nodegui/nodegui";
import nodeguiIcon from "../assets/nodegui.jpg";

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);

const titleStyle = `
  font-size: 18px;
`
const Title: React.FC<{title: string}> = (props) => <Text style={titleStyle}>{props.title}</Text>

class App extends React.Component {
  render() {
    return (
      <Window
        windowIcon={winIcon}
        windowTitle=""
        minSize={minSize}
        style={windowStyle}
      >
        <View style={containerStyle}>
          <Title title="NodeGui Example" />
          <Text style={styledTextStyle}>Styled Text</Text>
          <Text>日本語</Text>
        </View>
      </Window>
    );
  }
}

const windowStyle = `
  display: flex;
`;

// Maybe flexbox's `center` does not work
const containerStyle = `
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

const styledTextStyle = `
  color: red;
  font-style: italic;
`;

export default hot(App);
