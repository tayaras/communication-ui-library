// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { ITextField, Stack, mergeStyles } from '@fluentui/react';
import { AtMentionSuggestion, FluentThemeProvider, MessageThread, useTheme } from '@internal/react-components';
import { Title, Description, Props, Heading, Canvas } from '@storybook/addon-docs';
import { Meta } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { InputBoxComponent } from '../../../../react-components/src/components/InputBoxComponent';
import { borderAndBoxShadowStyle } from '../../../../react-components/src/components/styles/SendBox.styles';
import { COMPONENT_FOLDER_PREFIX } from '../../constants';
import { controlsToAdd, hiddenControl } from '../../controlsUtils';
import { GetHistoryChatMessages } from '../../MessageThread/snippets/placeholdermessages';

const getDocs: () => JSX.Element = () => {
  return (
    <>
      <Title>InputBox</Title>
      <Description>InputBox is a component that allows users to type text and mentions.</Description>
      <Heading>Example</Heading>
      <Canvas>
        <InputBoxStory />
      </Canvas>

      <Heading>Props</Heading>
      <Props of={InputBoxComponent} />
    </>
  );
};

const InputBoxStory = (): JSX.Element => {
  const exampleHtmlMessage =
    "<p>Hi <msft-at-mention userId='2' suggestionType='person'>Patricia Adams</msft-at-mention> <span>and and </span> and you <msft-at-mention userId='3' suggestionType='person'>Person 1</msft-at-mention>!</p>";
  // "Hi <msft-at-mention userId='2' suggestionType='person'>Patricia Adams</msft-at-mention>!";
  const sendTextFieldRef = React.useRef<ITextField>(null);
  const theme = useTheme();
  const [textValue, setTextValue] = useState<string>(exampleHtmlMessage);
  const trigger = '@';
  const suggestions: AtMentionSuggestion[] = [
    {
      userId: '1',
      suggestionType: 'person',
      displayName: ''
    },
    {
      userId: '2',
      suggestionType: 'person',
      displayName: 'Patricia Adams'
    },
    {
      userId: '3',
      suggestionType: 'person',
      displayName: '1'
    },
    {
      userId: '4',
      suggestionType: 'person',
      displayName: 'Your user'
    }
  ];
  return (
    <FluentThemeProvider>
      <MessageThread userId={'4'} messages={GetHistoryChatMessages()} />
      <div style={{ width: '31.25rem', height: '20rem' }}>
        <Stack
          className={mergeStyles(
            borderAndBoxShadowStyle({
              theme,
              hasErrorMessage: false,
              disabled: false
            })
          )}
        >
          <InputBoxComponent
            textFieldRef={sendTextFieldRef}
            children={undefined}
            inlineChildren={true}
            textValue={textValue}
            placeholderText="Type a message..."
            onChange={(event, newValue) => {
              setTextValue(newValue ?? '');
            }}
            atMentionLookupOptions={{
              trigger,
              onQueryUpdated: async (query: string) => {
                const filtered = suggestions.filter((suggestion) => {
                  return suggestion.displayName.toLocaleLowerCase().startsWith(query.toLocaleLowerCase());
                });
                return Promise.resolve(filtered);
              }
            }}
            onMentionAdd={(suggestion) => {
              console.log(suggestion);
            }}
            maxLength={0}
          />
        </Stack>
      </div>
    </FluentThemeProvider>
  );
};

// This must be the only named export from this module, and must be named to match the storybook path suffix.
// This ensures that storybook hoists the story instead of creating a folder with a single entry.
export const InputBox = InputBoxStory.bind({});

export default {
  id: `${COMPONENT_FOLDER_PREFIX}-internal-InputBoxComponent`,
  title: `${COMPONENT_FOLDER_PREFIX}/Internal/Chat/InputBox`,
  component: InputBoxComponent,
  argTypes: {
    textFieldRef: hiddenControl,
    children: hiddenControl,
    inlineChildren: hiddenControl,
    textValue: controlsToAdd
  },
  parameters: {
    docs: {
      page: () => getDocs()
    }
  }
} as Meta;
