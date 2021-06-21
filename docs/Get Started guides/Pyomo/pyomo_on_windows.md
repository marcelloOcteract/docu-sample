# Pyomo on Windows

Before reaching this guide, you'll have:
 - installed the Engine
 - registered your authentication token

## Step 1: Launch the Command Prompt

Click on the Windows icon at the bottom left of your screen and enter `Command Prompt`. You should now see the `Command Prompt` icon and be able to launch it.

---

## Step 2: Install Python

Check if Python is already installed on your machine by opening the  `Command Prompt` and typing:
```
python --version
```

If the given version is ">= 3.6" you can go to step 3.

If Python is not installed or if you have an earlier version installed, go to <https://www.python.org/downloads> and download the Python installer.

Run the Python installer and go through the installation process.

Python should be correctly installed at that point. You can check your installation by repeating the beginning of this step.

---

## Step 3: Install Pyomo

Enter:
```
pip install --user pyomo
```
Look out for any error messages in the output. To verify that it has been sucessfully installed, enter:
```
pyomo --version
```

This should output version info for Pyomo if installation is successful. If this fails, refer to the [Pyomo installation manual](http://www.pyomo.org/installation) for more detail.

---

## Step 4: Use the Python interpreter

Enter:
```
python
```
This will open the Python shell, where you can enter Python commands.

Alternatively, you can use a Python editor of your choice. Save the file as `your_file.py` and enter:
```
python "C:\path\to\your_file.py"
```
This will run your Python commands in one step.

---

## Step 5: Start your model

From now on, all commands will either be entered in the Python shell or in a Python file to be run later.

Enter:
```
from pyomo.environ import * 
model = m = ConcreteModel()
```

This will import the necessary functions from Pyomo and start an empty model.

---

## Step 6: Fill your model
Enter:
```
x1 = m.x1 = Var(within=Reals, bounds=(0,1), initialize=1) 
x2 = m.x2 = Var(within=Reals, bounds=(0,1), initialize=1)
x3 = m.x3 = Var(within=Reals, bounds=(0,1), initialize=None)
x4 = m.x4 = Var(within=Reals, bounds=(0,1), initialize=1)
x5 = m.x5 = Var(within=Reals, bounds=(0,1), initialize=None)

m.obj = Objective(sense=minimize, expr=42*x1 - 0.5*(100*x1*x1 + 100*x2*x2 + 100*x3*x3 + 100*x4*x4 + 100*x5*x5) + 44*x2 + 45*x3 + 47*x4 + 47.5*x5)
m.e2 = Constraint(expr=20*x1 + 12*x2 + 11*x3 + 7*x4 + 4*x5 <= 40)
```
If you'd prefer to get creative, refer to the [list of modeling components](https://pyomo.readthedocs.io/en/stable/pyomo_modeling_components/index.html) for Pyomo.

---

## Step 7: Set the number of cores (optional)
To make Octeract Engine solve in parallel, enter:
```
import os
os.environ["octeract_options"] = "num_cores=4"
```

You can replace `4` with any number offered by your license.

---

## Step 8: Solve your model
Finally, to solve your model, enter:
```
results = SolverFactory("octeract-engine").solve(m, tee=True, keepfiles=False, load_solutions=False)
print(results)
m.solutions.load_from(results)
```

If successful, it will print out the optimal solution for your model.

Alternatively, to skip the printing, instead enter:
```
SolverFactory("octeract-engine").solve(m, tee=True, keepfiles=False)
```

---
