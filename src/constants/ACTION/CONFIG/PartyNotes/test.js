import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { party: 1, notes: 'Bob' } };
      const actual = ACTION.create({ party: 1, notes: 'Bob' });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update the notes', () => {
      const campaign = {
        parties: {
          123: { notes: 'abc' },
        },
      };
      const expected = {
        parties: {
          123: { notes: 'def' },
        },
      };
      const action = ACTION.create({ party: 123, notes: 'def' });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});
