export const leads = (
  _: any,
  __: any,
  { clients: { leads: LeadsClient } }: Context
) => LeadsClient.leads()
