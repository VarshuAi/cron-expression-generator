
            const input = document.getElementById('cron-input');
            const summary = document.getElementById('cron-summary');

            function explainCron() {
                const val = input.value.trim().split(' ');
                if (val.length !== 5) {
                    summary.innerText = "Error: Requires exactly 5 cron parts.";
                    return;
                }
                // Simulating a parser mapping
                summary.innerHTML = "Translates to: <br><strong>\"Every 5 minutes, every day\"</strong>";
            }
            document.getElementById('btn-cron-parse').addEventListener('click', explainCron);
            explainCron();
        