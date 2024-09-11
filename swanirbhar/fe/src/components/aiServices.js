export const prioritizeTasksWithAI = async (tasks) => {
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCYaphT9uxTFSDbhVrBuPuiDzA_RRLIkoo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Provide me with a to-do list for today, prioritizing the most important work-related tasks first. Analyze my calendar and any connected task management apps to understand my meetings and deadlines, and evaluate the urgency and significance of each work task. Create a list with the most critical work-related tasks at the top. Here is the list: ${tasks.map(task => task.task).join(', ')}`
                }
              ]
            }
          ]
        }),
      });
  
      if (!response.ok) throw new Error('Failed to prioritize tasks');
      
      const data = await response.json();
      
      return data.contents[0].parts[0].text.split(',').map((taskText, index) => ({
        task: taskText.trim(),
        priority: `Priority ${index + 1}`,
        status: 'pending', 
        _id: `generated-${index}`, 
      }));
    } catch (error) {
      console.error('Error prioritizing tasks:', error);
      return tasks; 
    }
  };
  