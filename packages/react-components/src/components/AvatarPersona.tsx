// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IPersonaProps, Persona, PersonaInitialsColor } from '@fluentui/react';
import React, { useEffect } from 'react';

/**
 * Custom data attributes for the AvatarPersona component.
 */
export type AvatarPersonaData = {
  /**
   * Primary text to display, usually the name of the person.
   */
  text?: string;
  /**
   * Image URL to use, should be a square aspect ratio and big enough to fit in the image area.
   */
  imageUrl?: string;
  /**
   * The user's initials to display in the image area when there is no image.
   * @defaultvalue Derived from `text`
   */
  imageInitials?: string;
  /**
   * The background color when the user's initials are displayed.
   * @defaultvalue Derived from `text`
   */
  initialsColor?: PersonaInitialsColor | string;
  /**
   * The text color when the user's initials are displayed
   */
  initialsTextColor?: string;
};

/**
 * Callback function used to provide custom data to the AvatarPersona component.
 */
export type AvatarPersonaDataProvider = ((userId: string) => Promise<AvatarPersonaData>) | undefined;

export interface AvatarPersonaProps extends IPersonaProps {
  /**
   * Azure Communicator user ID.
   */
  userId?: string;
  /**
   * A function that returns a Promise that resolves to the data to be displayed.
   */
  dataProvider?: AvatarPersonaDataProvider;
}

/**
 * An Avatar component made using the `Persona` component.
 * It allows you to specify a `userId` and a `dataProvider` to retrieve the `AvatarPersonaData`.
 * Read more about `Persona` component at https://developer.microsoft.com/en-us/fluentui#/controls/web/persona
 */
export const AvatarPersona = (props: AvatarPersonaProps): JSX.Element => {
  const { userId, dataProvider } = props;
  const [data, setData] = React.useState<AvatarPersonaData | undefined>();

  useEffect(() => {
    (async () => {
      if (dataProvider && userId) {
        const data = await dataProvider(userId);
        setData(data);
      }
    })();
  }, [dataProvider, userId]);

  return (
    <Persona
      {...props}
      text={data?.text ?? props.text}
      imageUrl={data?.imageUrl ?? props.imageUrl}
      imageInitials={data?.imageInitials ?? props.imageInitials}
      initialsColor={data?.initialsColor ?? props.initialsColor}
      initialsTextColor={data?.initialsTextColor ?? props.initialsTextColor}
      hidePersonaDetails={true}
    />
  );
};
