type Activity = {
  id: string;
  message: string;
  created_at: string;
};

type Props = {
  activities: Activity[];
};

export default function ActivityFeed({
  activities,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Activity Feed
      </h2>

      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-slate-400">
            No activity yet.
          </p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="rounded-xl bg-slate-800 p-4"
            >
              <p className="text-white">
                {activity.message}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {new Date(
                  activity.created_at
                ).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}