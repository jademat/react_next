import './dashboard.css';

export default function Dashboard() {
    return (
        <main className="dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to the admin panel. Here you can manage users, settings, and reports.</p>
            <div className="stats">
                <div className="stat-card">
                    <h3>Users</h3>
                    <p>150</p>
                </div>
                <div className="stat-card">
                    <h3>Reports</h3>
                    <p>25</p>
                </div>
                <div className="stat-card">
                    <h3>Active Sessions</h3>
                    <p>42</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Tasks</h3>
                    <p>8</p>
                </div>
            </div>
            <div className="recent-activity">
                <h3>Recent Activity</h3>
                <p>User John Doe logged in at 10:30 AM.</p>
                <p>Report #123 was submitted at 9:15 AM.</p>
                <p>Settings updated by Admin at 8:45 AM.</p>
                <p>Scroll down to see more...</p>
            </div>
        </main>
    );
}