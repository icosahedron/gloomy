import React from 'react';

import { Scenario, Party } from '../../Common';

export default ({ campaign, action }) => {
  const party = campaign.parties.find(c => c.id === action.payload.party);
  const scenario = campaign.scenarios.find(s => s.id === action.payload.scenario);
  return (
    <span>
      <Party party={party} /> traveled to <Scenario scenario={scenario} />
    </span>
  );
};
