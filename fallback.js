// Simple fallback dashboard without Recharts
function createFallbackDashboard() {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold text-slate-800 mb-2">MVP Performance Metrics</h1>
        <p class="text-slate-500 mb-8">Real-time monitoring dashboard (Simplified View)</p>
        
        <div class="bg-white rounded-xl shadow-lg border border-slate-100 p-6 mb-8">
          <h2 class="text-xl font-semibold text-slate-700 mb-2">Dashboard Status</h2>
          <p class="text-sm text-slate-500 mb-6">Interactive charts could not be loaded</p>
          
          <div class="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p class="text-amber-800">
              The interactive dashboard couldn't be loaded. This is a simplified fallback view.
              <br><br>
              Key metrics summary:
            </p>
            
            <ul class="list-disc pl-5 mt-4 text-amber-800">
              <li>Notification Time: Reduced by 66.7% (from 45s to 15s)</li>
              <li>First Call Resolution: Improved by 20% (from 65% to 78%)</li>
              <li>Call Volume: Reduced by 40% (from 1000 to 600 weekly calls)</li>
            </ul>
            
            <button onclick="location.reload()" class="mt-4 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded">
              Try Loading Full Dashboard
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
            <h2 class="text-xl font-semibold text-slate-700 mb-4">Performance Summary</h2>
            
            <div class="space-y-6">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium text-slate-600">Notification Time Reduction</span>
                  <span class="text-sm font-bold text-blue-600">66.7%</span>
                </div>
                <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-blue-500 rounded-full" style="width: 66.7%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium text-slate-600">FCR Improvement</span>
                  <span class="text-sm font-bold text-emerald-600">20%</span>
                </div>
                <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-emerald-500 rounded-full" style="width: 20%"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium text-slate-600">Call Volume Reduction</span>
                  <span class="text-sm font-bold text-indigo-600">40%</span>
                </div>
                <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-indigo-500 rounded-full" style="width: 40%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
            <h2 class="text-xl font-semibold text-slate-700 mb-4">Data Tables</h2>
            
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr>
                    <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Week</th>
                    <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Notif. Time</th>
                    <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">FCR Rate</th>
                    <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Call Volume</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr>
                    <td class="px-3 py-2 text-sm text-slate-600">Week 1</td>
                    <td class="px-3 py-2 text-sm text-slate-600">42s</td>
                    <td class="px-3 py-2 text-sm text-slate-600">65%</td>
                    <td class="px-3 py-2 text-sm text-slate-600">1000</td>
                  </tr>
                  <tr>
                    <td class="px-3 py-2 text-sm text-slate-600">Week 2</td>
                    <td class="px-3 py-2 text-sm text-slate-600">35s</td>
                    <td class="px-3 py-2 text-sm text-slate-600">70%</td>
                    <td class="px-3 py-2 text-sm text-slate-600">850</td>
                  </tr>
                  <tr>
                    <td class="px-3 py-2 text-sm text-slate-600">Week 3</td>
                    <td class="px-3 py-2 text-sm text-slate-600">28s</td>
                    <td class="px-3 py-2 text-sm text-slate-600">75%</td>
                    <td class="px-3 py-2 text-sm text-slate-600">700</td>
                  </tr>
                  <tr>
                    <td class="px-3 py-2 text-sm text-slate-600">Week 4</td>
                    <td class="px-3 py-2 text-sm text-slate-600">15s</td>
                    <td class="px-3 py-2 text-sm text-slate-600">78%</td>
                    <td class="px-3 py-2 text-sm text-slate-600">600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// If this script loads, it means the main dashboard failed
createFallbackDashboard();
