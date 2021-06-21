# Pyomo on Linux

Before reaching this guide, you'll have:
 - installed the Engine
 - registered your authentication token

## Step 1: Launch a terminal

Open your terminal of choice. You can search for "terminal" in your start menu or try the shortcut `ctrl+shift+t`.

---

## Step 2: Install Python

Pyomo uses the Python language to build models. To check if you already have Python installed, enter:
```
python3 --version
```

If this returns version info for Python (version 3.6 or newer), proceed to the next step.

Otherwise install Python and check again. To install Python, look for your Linux distribution below. If this fails, refer to the [Python installation manual](https://docs.python.org/3/using/unix.html) for more detail.

### Ubuntu

Enter:
```
sudo apt update
sudo apt install python3
```

---

### CentOS

Enter:
```
sudo yum update
sudo yum install python3
```

---

## Step 3: Install pip

You will need `pip` to retrieve Pyomo for your Python installation. To check if you already have `pip` installed, enter:
```
python3 -m pip --version
```

If this returns version info for `pip`, proceed to the next step.

Otherwise install `pip` and check again. To install `pip`, look for your Linux distribution below. If this fails, refer to the [pip installation manual](https://docs.python.org/3/using/unix.html) for more detail.

### Ubuntu

Enter:
```
sudo apt update
sudo apt install python3-pip
```

---

### CentOS

Enter:
```
sudo yum update
sudo yum install python3-pip
```

---

## Step 4: Install Pyomo

Enter:
```
python3 -m pip install --user pyomo
```

Look out for any error messages in the output. To verify that it has been sucessfully installed, enter:
```
pyomo --version
```

This should output version info for Pyomo if installation is successful. If this fails, refer to the [Pyomo installation manual](http://www.pyomo.org/installation) for more detail.

---

## Step 5: Use the Python interpreter

Enter:
```
python3
```
This will open the Python shell, where you can enter Python commands.

Alternatively, you can use a Python editor of your choice. Save the file as `your_file.py` and enter:
```
python3 "/path/to/your_file.py"
```
This will run your Python commands in one step.

---

## Step 6: Start your model

From now on, all commands will either be entered in the Python shell or in a Python file to be run later.

Enter:
```
from pyomo.environ import * 
model = m = ConcreteModel()
```

This will import the necessary functions from Pyomo and start an empty model.

---

## Step 7: Fill your model
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

## Step 8: Set the number of cores (optional)
To make Octeract Engine solve in parallel, enter:
```
import os
os.environ["octeract_options"] = "num_cores=4"
```

You can replace `4` with any number offered by your license.

---

## Step 9: Solve your model
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

