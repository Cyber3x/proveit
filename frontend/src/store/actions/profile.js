export const EDIT_PROFILE = 'EDIT_PROFILE';

export const editProfile = newProfile => {
  return { type: EDIT_PROFILE, newProfile: newProfile };
};
