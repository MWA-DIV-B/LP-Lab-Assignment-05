import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class EventServlet extends HttpServlet {
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    // Retrieve any data or perform any necessary operations here
    // You can set attributes on the request object and forward it to the JSP for rendering

    // Example: Setting an attribute and forwarding to a JSP
    request.setAttribute("eventName", "Awesome Event");
    request.getRequestDispatcher("event.jsp").forward(request, response);
  }
}
